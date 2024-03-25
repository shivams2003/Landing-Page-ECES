import React, { useState } from "react";

import Home from "./Home";
import Hero from "./Hero";
import { AnimatePresence } from "framer-motion";
import Footer from "./footer";
import CarouselApp from "./Carousel/CarouselApp";
import CustomLogo from "./logo/Logo";

function App() {
  const [coverAnimationProgress, setCoverAnimationProgress] = useState(true);

  return (
    <div>
      <AnimatePresence mode="wait">
        {coverAnimationProgress && (
          <Home setCoverAnimationProgress={setCoverAnimationProgress} />
        )}
        {!coverAnimationProgress && (
          <>
            <Hero />
            {/* this carousel is for upcoming events */}
            <CarouselApp />
            <Footer />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
