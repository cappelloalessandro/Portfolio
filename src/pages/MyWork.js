import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Pc images
import athlete from "../img/200bpm-pc.png";
import creative from "../img/Creativeclub-pc.png";
import league from "../img/League-pc.png";
//Animations
import { motion } from "framer-motion";
import {
  sliderContainer,
  slider,
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
} from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work
      style={{ background: "#fff" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>

      {/* 200bpm */}
      <Movie>
        <motion.h2 variants={fade}>200Bpm</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/200bpm">
          <Hide>
            <motion.img variants={photoAnim} src={athlete} alt="athlete" />
          </Hide>
        </Link>
      </Movie>

      <Movie
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
      >
        <h2>CreativeClub</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/CreativeClub">
          <img src={creative} alt="CreativeClub" />
        </Link>
      </Movie>


      <Movie 
        ref={element}
        variants={fade}
        animate={controls}
        initial="hidden">
        <h2>League Of Legends Action Figure</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/League-of-legends-af">
          <img src={league} alt="League of legends action figure" />
        </Link>
      </Movie> 

      <ScrollTop />

    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }

  h2 {
    padding: 1rem 0rem;
    font-family: "Lobster", cursive;
  }
`;
const Movie = styled(motion.div)`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    /* height: 70vh;
    object-fit: cover; */
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #EE6055;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #23D997;
`;
const Frame3 = styled(Frame1)`
  background: #FFD97D;
`;
const Frame4 = styled(Frame1)`
  background: #FF9B85;
`;

export default OurWork;
