import React from "react";

interface MapProps {
  height?: string;
}

const UKBusRentalsMap: React.FC<MapProps> = ({ height = "400px" }) => {
  return (
    <div style={{ width: "100%", height }}>
      <iframe
        title="Belgium Buses Location"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9160537426387!2d-0.12614482337948946!3d51.514756071814894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876058c7c9527fb%3A0x79bc7464573598c1!2s71-75%20Shelton%20St%2C%20London%20WC2H%209JQ%2C%20UK!5e0!3m2!1sen!2sae!4v1762231739229!5m2!1sen!2sae"
      ></iframe>
    </div>
  );
};

export default UKBusRentalsMap;