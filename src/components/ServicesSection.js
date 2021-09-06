import React from "react";
//Import Images
import home2 from "../img/home2.png";
//Styles
import { About, Description, Image } from "../styles";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          About <span>Alessandro</span>
        </h2>
        <p>
        Mi occupo a 360° della realizzazione di design e sviluppo online del tuo sito, partendo da una semplice chiamata, descrivendomi le tue esigenze, per poi proseguire con lo sviluppo grafico con wireframes, prima stesura del design, e prototipazione del sito.</p>
        <p>  Affidandoti a me lavorerai con una persona giovane e al passo con le tendenze di questo momento, costantemente aggiornato e in grado di trovare soluzioni fuori dall’ordinario. E’ per questo che mi impegnerò a creare il sito più adatto a te e alle tue esigenze.
        </p>
        <p>
          Mi rivolgo principalmente alle piccole attività per aiutarle ad approdare sul web nel modo giusto!
        </p>
      </Description>
      <Image>
        <img alt="camera" src={home2} />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 3rem;
  }
  p {
    width: 80%;
    padding: 2rem 0rem 1rem 0rem;
  }
  @media (max-width: 1300px){
      p{
        text-align:left;
          }
      img{
        padding-top: 2.5rem;
      }
    }
`;

export default ServicesSection;
