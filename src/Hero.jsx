import React from "react";
import "./Hero.css";
import { m, LazyMotion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

import { ArrowForwardIcon } from "@chakra-ui/icons";

const loadFeatures = () =>
  import("./features").then((response) => response.default);

function Hero() {
  const marqueeVariant = {
    hiddenLeft: {
      x: 0,
    },
    hiddenRight: {
      x: -1000,
    },
    visibleLeft: {
      x: -1000,
      transition: {
        ease: "linear",
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
        delay: 1.3,
      },
    },
    visibleRight: {
      x: 0,
      transition: {
        ease: "linear",
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
        delay: 1.3,
      },
    },
  };
  const heroTextVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        delay: 0.5,
        duration: 1.5,
      },
    },
  };
  const contactBtnVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        delay: 1,
        duration: 0.5,
      },
    },
  };

  return (
    <LazyMotion features={loadFeatures} strict>
      <div className="hero">
        <div className="hero__container">
          <m.div
            className="hero__text"
            variants={heroTextVariant}
            animate="visible"
            initial="hidden"
          >
            <div className="hero__name">
              <m.h1
                className="hero_marquee"
                variants={marqueeVariant}
                initial="hiddenLeft"
                animate="visibleLeft"
              >
                ECES ECES ECES ECES ECES ECES
              </m.h1>
            </div>

            <div className="hero__status">
              <m.h1
                className="hero_marquee"
                variants={marqueeVariant}
                initial="hiddenRight"
                animate="visibleRight"
              >
                ENVISION COLLABORATE EXPERIMENT SUCCEED
              </m.h1>
            </div>
          </m.div>
          <m.a
            href="https://eces-nitw.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__contactme visitBtn" 
            variants={contactBtnVariant}
            animate="visible"
            initial="hidden"
            style={{
              border: "1px solid white",
              padding: "10px",
              textDecoration: "none",
              color: "white",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: 'center', // Ensure vertical centering
            }}
          >
            Visit us
            <ArrowForwardIcon />
          </m.a>
        </div>
      </div>
    </LazyMotion>
  );
}

export default Hero;
