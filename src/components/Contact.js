import React from "react";


import styled from "styled-components";
import Wave from "../components/Wave";
//Animations
import { motion } from "framer-motion";
import { 
  pageAnimation,
  titleAnim,
  lineAnim, 
  photoAnim 
} from "../animation";
// images
import { Image } from "../styles";
import ale2 from "../img/ale2.jpg";

const ContactMe = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      // style={{ background: "#fff" }}
    >
        <div>
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Mettiamoci in Contatto.</motion.h2>
        </Hide>
      </Title>
          <Hide>
            <Social variants={titleAnim}>
              {/* <Circle />  */}
              <Contact>
                <a href="mailto:cappelloalessandroproject@gmail.com">Email</a>
                <motion.div variants={lineAnim} className="line"></motion.div>
              </Contact>
            </Social>
          </Hide>
          <Hide>
            <Social variants={titleAnim}>
              {/* <Circle /> */}
              <Contact>
                <a href="https://www.linkedin.com/in/alessandro-cappello-015a771a9/"  target="_blank"  rel="noreferrer">Linkedin</a>
                <motion.div variants={lineAnim} className="line"></motion.div>
              </Contact>
            </Social>
          </Hide>
          <Hide>
            <Social variants={titleAnim}>
              {/* <Circle /> */}
              <Contact>
                <a href="https://www.instagram.com/justcappy.dev/"  target="_blank"  rel="noreferrer">Instagram</a>
                <motion.div variants={lineAnim} className="line"></motion.div>
              </Contact>
            </Social>
          </Hide>
        </div>
        <Wave></Wave>
        <Image>
          <motion.img variants={photoAnim} src={ale2} alt="Alessandro Cappello" />
        </Image>
    </ContactStyle>
    
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  display: flex;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
  @media (max-width: 1050px){
  img{
    display: none;
    }
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  /* color: #fff; */
  color: #23d997;
  letter-spacing: 0.2rem;
  font-family: "Lobster", cursive;
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

const Contact = styled.div`
.line {
    height: 0.4rem;
    background: #23d997;
    /* margin-left:4rem ; */
    margin-left:0rem ;
    margin-bottom: 3rem;
  }
a{
  display:block;
  font-size:3.5rem;
  margin: 2rem 0rem 0rem;
  text-decoration: none;
  color: #f2f2f2;
  font-weight:bold;
}
`;


export default ContactMe;
