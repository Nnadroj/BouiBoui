import React from "react";
import "./map.css";
import { motion } from "framer-motion";

function Map({ coords, setShowMap }) {
  return (
    <motion.div
      id="map"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div id="map-close" onClick={() => setShowMap(false)}>
        X
      </div>
      <iframe
        src={`https://maps.google.com/maps?q=${coords.latitude},${coords.longitude}&hl=en&z=14&amp&output=embed`}
      ></iframe>
    </motion.div>
  );
}

export default Map;
