import React from "react";

interface GoogleMapsProps {
  height?: string;
}

const GoogleMaps: React.FC<GoogleMapsProps> = ({ height = "400px" }) => {
  return (
    <div style={{ width: "100%", height }}>
      <iframe
        title="Belgium Buses - Brussels Office Location"
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: "8px" }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d374.4619347364569!2d4.355745792953752!3d50.84839562159975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c3807b6c943b%3A0x48e6425111e8c74d!2sRue%20d&#39;Arenberg%203%2C%201000%20Bruxelles%2C%20Belgium!5e0!3m2!1sen!2sae!4v1762414635506!5m2!1sen!2sae"
      ></iframe>
    </div>
  );
};

export default GoogleMaps;
