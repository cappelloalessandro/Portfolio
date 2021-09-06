import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";
import { SiteState } from "../siteState";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const SiteDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  // const [movies, setMovies] = useState(MovieState);
  // const [movie, setMovie] = useState(null);
  const [sites, setSites] = useState(SiteState);
  const [site, setSite] = useState(null);

  //UseEffect
  useEffect(() => {
    const currentSite = sites.filter((stateSites) => stateSites.url === url);
    // const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    // setMovie(currentMovie[0]);
    setSite(currentSite[0]);
    console.log(setSites);
  }, [sites, url]);

  return (
    <>
      {site && (
        <Details
          exit="exit"
          variants={pageAnimation} 
          initial="hidden"
          animate="show"
          >
          <HeadLine>
            <h2>{site.title}</h2>
            <img src={site.mainImg} alt="movie" />
          </HeadLine>
          <Awards>
            {site.awards.map((award) => (
              <Award
              title={award.title}
              description={award.description}
              key={award.title}
              />
              ))}
          </Awards>
          <WorkDescription>
              <p>{site.workDescription}</p>
          </WorkDescription>
          
          <ImageDisplay>
          <img src={site.secondaryImg} alt={"second-img"} />
          </ImageDisplay>
          
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)`
  color: #fff;
`;
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    font-family: "Lobster", cursive;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    margin-top: 5vh;
    width: 100%;
    height: auto;
  }
`;

const WorkDescription = styled.div`
  p{
    margin: 2rem 5rem;
  }
`

const Awards = styled.div`
  min-height: 40vh;
  display: flex;
  margin: 2rem 2rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1500px) {
    display: block;
    margin: 2rem 2rem;
  }
`;
const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
    line-height: 2.2rem;
  }
`;
const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

//Award Component
const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};


export default SiteDetail;
