import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Pc-images
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
      <Site>
        <motion.h2 variants={fade}>200Bpm</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/200bpm">
          <Hide>
            <motion.img variants={photoAnim} src={athlete} alt="athlete" />
          </Hide>
        </Link>
      </Site>

      <Site
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
      </Site>


      <Site 
        ref={element}
        variants={fade}
        animate={controls}
        initial="hidden">
        <h2>League Of Legends Action Figure</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/League-of-legends-af">
          <img src={league} alt="League of legends action figure" />
        </Link>
      </Site> 


      {/* <Site 
        ref={element}
        variants={fade}
        animate={controls}
        initial="hidden">
        <h2>More to Come</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/League-of-legends-af">
          <img src={league} alt="League of legends action figure" />
        </Link>
      </Site>  */}

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
    color:#f1f1f1;
    
  }
  @media (max-width: 1300px) {
    h2{
      font-size:2rem;
      text-align: center;
    }
  }
`;
const Site = styled(motion.div)`
  padding-bottom: 10rem;
  img {
    width: 100%;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

//Frames Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #d92365;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #23D997;
`;
const Frame3 = styled(Frame1)`
  background: #d92365;
`;
const Frame4 = styled(Frame1)`
  background: #23D997;
`;

export default OurWork;
