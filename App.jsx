import React, { useState } from "react";
import CarouselApp from "./Carousel/carouselApp";
import Home from "./Home";
import Hero from "./Hero";
import { AnimatePresence } from "framer-motion";
import Footer from "./footer";
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
            <CarouselApp />
            <Footer />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
