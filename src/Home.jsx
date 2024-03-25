import React, { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import CustomLogo from "./logo/Logo"; // Import the CustomLogo component
import "./Home.css";

function Home({ setCoverAnimationProgress }) {
  const [showLogo, setShowLogo] = useState(true); // State to control the logo visibility

  useEffect(() => {
    setTimeout(() => {
      setShowLogo(false); // Hide the logo after a delay
      setCoverAnimationProgress(false);
    }, 3000);
  }, []);

  return (
    <AnimatePresence>
      {showLogo && (
        <m.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }} // Adjust the duration and ease
        >
          <CustomLogo />
        </m.div>
      )}
    </AnimatePresence>
  );
}

export default Home;
