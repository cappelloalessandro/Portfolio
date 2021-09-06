import React from "react";
import home1 from "../img/home1.png";
import { Link } from "react-router-dom";

import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";


const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>Alessandro Cappello</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              Junior <span>Front-End</span> Developer
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h4 variants={titleAnim} style={{marginTop:"1rem"}}>Web Designer / UI / Wordpress</motion.h4>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Sempre disponibile per lavorare freelance e sviluppare i tuoi siti web!
        </motion.p>
        
        <Link to="/contact"> 
          <motion.button variants={fade}>Mettiamoci in contatto</motion.button>
        </Link>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="Alessandro Cappello" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
