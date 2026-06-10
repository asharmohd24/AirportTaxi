import React from "react";
import { site } from "../data";

interface GoogleMapsProps {
  height?: string;
}

const GoogleMaps: React.FC<GoogleMapsProps> = ({ height = "400px" }) => {
  return (
    <div style={{ width: "100%", height }}>
      <iframe
        title={`${site.name} - Office Location`}
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: "8px" }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.647585772896!2d-0.41754040678838145!3d51.44626564246187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876737218578383%3A0xfd5600db608af11!2s1%20Tilley%20Rd%2C%20Feltham%20TW13%204GH%2C%20UK!5e0!3m2!1sen!2sae!4v1781103955295!5m2!1sen!2sae"
      ></iframe>
    </div>
  );
};

export default GoogleMaps;


