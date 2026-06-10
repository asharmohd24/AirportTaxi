<?php
// contact.php

error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);

// ── Configuration ────────────────────────────────────────────────────────────
$RECIPIENT_EMAIL   = 'YOUR_EMAIL_HERE';               // TODO: replace
$RECAPTCHA_SECRET  = 'YOUR_RECAPTCHA_SECRET_HERE';    // TODO: replace
$ALLOWED_ORIGIN    = 'https://airporttaxiheathrow.com';
$FROM_ADDRESS      = 'noreply@airporttaxiheathrow.com';
$RATE_LIMIT        = 10;   // max requests per IP
$RATE_WINDOW       = 3600; // sliding window in seconds (1 hour)
// ─────────────────────────────────────────────────────────────────────────────

// ── CORS ─────────────────────────────────────────────────────────────────────
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin === $ALLOWED_ORIGIN) {
    header("Access-Control-Allow-Origin: $ALLOWED_ORIGIN");
} else {
    header('Access-Control-Allow-Origin: ' . $ALLOWED_ORIGIN);
}
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// ── Rate limiting (file-based, no database required) ─────────────────────────
function checkRateLimit(string $ip, int $limit, int $window): bool {
    $file = sys_get_temp_dir() . '/ath_rl_' . md5($ip) . '.json';
    $fp = @fopen($file, 'c+');
    if (!$fp) return true; // can't open file — fail open

    flock($fp, LOCK_EX);

    $now = time();
    $content = stream_get_contents($fp);
    $timestamps = $content ? (json_decode($content, true) ?? []) : [];

    // Remove timestamps outside the window
    $timestamps = array_values(array_filter($timestamps, fn($t) => ($now - $t) < $window));

    if (count($timestamps) >= $limit) {
        flock($fp, LOCK_UN);
        fclose($fp);
        return false;
    }

    $timestamps[] = $now;
    ftruncate($fp, 0);
    rewind($fp);
    fwrite($fp, json_encode($timestamps));
    flock($fp, LOCK_UN);
    fclose($fp);
    return true;
}

$client_ip = $_SERVER['HTTP_CF_CONNECTING_IP']   // Cloudflare
          ?? $_SERVER['HTTP_X_FORWARDED_FOR']
          ?? $_SERVER['REMOTE_ADDR']
          ?? 'unknown';
$client_ip = trim(explode(',', $client_ip)[0]); // take first IP if comma-separated

if (!checkRateLimit($client_ip, $RATE_LIMIT, $RATE_WINDOW)) {
    error_log("Rate limit exceeded for IP: $client_ip");
    http_response_code(429);
    echo json_encode(['success' => false, 'message' => 'Too many requests. Please try again later.']);
    exit;
}

// ── reCAPTCHA ─────────────────────────────────────────────────────────────────
$recaptcha_token = $_POST['recaptcha_token'] ?? '';

if (empty($recaptcha_token)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Security verification failed. Please try again.']);
    exit;
}

$recaptcha_verify = file_get_contents(
    "https://www.google.com/recaptcha/api/siteverify?secret={$RECAPTCHA_SECRET}&response={$recaptcha_token}"
);
$recaptcha_data = json_decode($recaptcha_verify);

if (!$recaptcha_data->success || ($recaptcha_data->score ?? 0) < 0.5) {
    error_log("reCAPTCHA failed for IP $client_ip — " . print_r($recaptcha_data, true));
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Security verification failed. Please try again.']);
    exit;
}

error_log("Form submission from IP $client_ip at " . date('Y-m-d H:i:s'));

// ── Helpers ───────────────────────────────────────────────────────────────────
function convertDateToDMY(string $date): string {
    if (empty($date)) return '';
    $d = DateTime::createFromFormat('Y-m-d', $date);
    return $d ? $d->format('d/m/Y') : $date;
}

function emailStyle(): string {
    return '
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .field-label { font-weight: bold; color: #1d4ed8; }
        .footer { margin-top: 20px; padding: 20px; background: #eee; text-align: center; font-size: 12px; border-radius: 8px; }
    ';
}

// ── Form handling ─────────────────────────────────────────────────────────────
$form_type = $_POST['form_type'] ?? 'contact_page';

if ($form_type === 'contact_page') {
    $name         = htmlspecialchars(trim($_POST['name']        ?? ''));
    $email        = filter_var(trim($_POST['email']             ?? ''), FILTER_SANITIZE_EMAIL);
    $phone        = htmlspecialchars(trim($_POST['phone']       ?? ''));
    $countryCode  = htmlspecialchars(trim($_POST['countryCode'] ?? ''));
    $service      = htmlspecialchars(trim($_POST['service']     ?? ''));
    $passengers   = htmlspecialchars(trim($_POST['passengers']  ?? ''));
    $date         = htmlspecialchars(trim($_POST['date']        ?? ''));
    $time         = htmlspecialchars(trim($_POST['time']        ?? ''));
    $returnDate   = htmlspecialchars(trim($_POST['returnDate']  ?? ''));
    $returnTime   = htmlspecialchars(trim($_POST['returnTime']  ?? ''));
    $hasReturnDate = filter_var($_POST['hasReturnDate'] ?? 'false', FILTER_VALIDATE_BOOLEAN);
    $message      = htmlspecialchars(trim($_POST['message']     ?? ''));

    if (empty($name) || empty($email) || empty($service) || empty($message)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'All required fields must be filled']);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Invalid email address']);
        exit;
    }

    $formatted_phone = (!empty($countryCode) && !empty($phone))
        ? "$countryCode $phone"
        : $phone;

    $formatted_date        = convertDateToDMY($date);
    $formatted_return_date = convertDateToDMY($returnDate);

    $subject = "New Contact Form Submission - Airport Taxi Heathrow";

    $return_fields = $hasReturnDate
        ? "<div class='field'><span class='field-label'>Return Date:</span> $formatted_return_date</div>
           <div class='field'><span class='field-label'>Return Time:</span> $returnTime</div>"
        : '';

    $email_body = "
    <html><head><style>" . emailStyle() . "</style></head>
    <body><div class='container'>
        <div class='header'>
            <h1>New Contact Form Submission</h1>
            <p>Airport Taxi Heathrow</p>
        </div>
        <div class='content'>
            <div class='field'><span class='field-label'>Name:</span> $name</div>
            <div class='field'><span class='field-label'>Email:</span> $email</div>
            <div class='field'><span class='field-label'>Phone:</span> $formatted_phone</div>
            <div class='field'><span class='field-label'>Service Needed:</span> $service</div>
            <div class='field'><span class='field-label'>Passengers:</span> $passengers</div>
            <div class='field'><span class='field-label'>Travel Date:</span> $formatted_date</div>
            <div class='field'><span class='field-label'>Pickup Time:</span> $time</div>
            $return_fields
            <div class='field'><span class='field-label'>Message:</span><br>$message</div>
        </div>
        <div class='footer'>
            <p>Submitted via airporttaxiheathrow.com &mdash; " . date('d-m-Y H:i:s') . "</p>
        </div>
    </div></body></html>";

} else {
    // Quote form
    $reason_for_travel = htmlspecialchars(trim($_POST['reason_for_travel'] ?? ''));
    $firstname         = htmlspecialchars(trim($_POST['firstname']         ?? ''));
    $lastname          = htmlspecialchars(trim($_POST['lastname']          ?? ''));
    $email             = filter_var(trim($_POST['email']                   ?? ''), FILTER_SANITIZE_EMAIL);
    $phone             = htmlspecialchars(trim($_POST['phone']             ?? ''));
    $phone_with_code   = htmlspecialchars(trim($_POST['phone_with_code']   ?? ''));
    $company           = htmlspecialchars(trim($_POST['company']           ?? ''));
    $pickup            = htmlspecialchars(trim($_POST['pickup']            ?? ''));
    $destination       = htmlspecialchars(trim($_POST['destination']       ?? ''));
    $date              = htmlspecialchars(trim($_POST['date']              ?? ''));
    $time              = htmlspecialchars(trim($_POST['time']              ?? ''));
    $returnDate        = htmlspecialchars(trim($_POST['returnDate']        ?? ''));
    $returnTime        = htmlspecialchars(trim($_POST['returnTime']        ?? ''));
    $hasReturnDate     = filter_var($_POST['hasReturnDate'] ?? 'false', FILTER_VALIDATE_BOOLEAN);
    $passengers        = htmlspecialchars(trim($_POST['passengers']        ?? ''));
    $message           = htmlspecialchars(trim($_POST['message']           ?? ''));

    if (empty($firstname) || empty($lastname) || empty($email) || empty($phone) || empty($company) || empty($reason_for_travel)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'All required fields must be filled']);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Invalid email address']);
        exit;
    }

    $formatted_phone = !empty($phone_with_code) ? $phone_with_code : $phone;

    $formatted_date        = convertDateToDMY($date);
    $formatted_return_date = convertDateToDMY($returnDate);

    $subject = "New Quote Request - Airport Taxi Heathrow";

    $return_fields = $hasReturnDate
        ? "<div class='field'><span class='field-label'>Return Date:</span> $formatted_return_date</div>
           <div class='field'><span class='field-label'>Return Time:</span> $returnTime</div>"
        : '';

    $email_body = "
    <html><head><style>" . emailStyle() . "</style></head>
    <body><div class='container'>
        <div class='header'>
            <h1>New Quote Request</h1>
            <p>Airport Taxi Heathrow</p>
        </div>
        <div class='content'>
            <div class='field'><span class='field-label'>Reason for Travel:</span> $reason_for_travel</div>
            <div class='field'><span class='field-label'>Name:</span> $firstname $lastname</div>
            <div class='field'><span class='field-label'>Email:</span> $email</div>
            <div class='field'><span class='field-label'>Phone:</span> $formatted_phone</div>
            <div class='field'><span class='field-label'>Company/School:</span> $company</div>
            <div class='field'><span class='field-label'>Pickup Location:</span> $pickup</div>
            <div class='field'><span class='field-label'>Destination:</span> $destination</div>
            <div class='field'><span class='field-label'>Travel Date:</span> $formatted_date</div>
            <div class='field'><span class='field-label'>Pickup Time:</span> $time</div>
            $return_fields
            <div class='field'><span class='field-label'>Passengers:</span> $passengers</div>
            <div class='field'><span class='field-label'>Additional Message:</span><br>$message</div>
        </div>
        <div class='footer'>
            <p>Submitted via airporttaxiheathrow.com &mdash; " . date('d-m-Y H:i:s') . "</p>
        </div>
    </div></body></html>";
}

// ── Send ──────────────────────────────────────────────────────────────────────
$headers  = "From: Airport Taxi Heathrow <{$FROM_ADDRESS}>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

if (mail($RECIPIENT_EMAIL, $subject, $email_body, $headers)) {
    error_log("Email sent to $RECIPIENT_EMAIL from IP $client_ip");
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
} else {
    error_log("Failed to send email from IP $client_ip");
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send email. Please try again later.']);
}
?>
