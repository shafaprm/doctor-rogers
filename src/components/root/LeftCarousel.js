import React, {useEffect} from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import {motion, useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'

import bgImg from "../../assets/background-img-1.webp";
import vid from '../../assets/left-carousel-vid.mp4'

const videoVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    }
  },
  hidden: {
    x: "400px"
  }
};

const imageVariants = {
  visible : {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
      ease: "easeInOut",
      duration: 0.7
    }
  },
  hidden: {
    x: "700px"
  }
}

const LeftCarousel = (props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if(inView){
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <CarouselContainer>
      <TextContainer>
        <h1
          style={{
            fontSize: "65px",
            fontWeight: 500,
            fontStyle: "italic",
            fontFamily: "Cormorant Garamond",
            marginTop: "250px",
          }}
        >
          {props.UpperHeading}
        </h1>
        <h1
          style={{
            fontSize: "65px",
            fontWeight: 500,
            fontFamily: "Cormorant Garamond",
            lineHeight: "50px",
          }}
        >
          {props.LowerHeading}
        </h1>
        <LinkItem to="#">{props.link}</LinkItem>
      </TextContainer>
      <ImageContainer>
        <VideoAnimationWrapper
        ref = {ref}
        animate = {controls}
        initial = "hidden"
        variants = {videoVariants}
      >
          <VideoImageWrapper autoPlay loop muted>
              <source src = {vid} type = 'video/mp4' />
          </VideoImageWrapper>
        </VideoAnimationWrapper>
        <BackgroundImageWrapper 
        ref = {ref}
        animate = {controls}
        initial = "hidden"
        variants = {imageVariants}
        />
      </ImageContainer>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  width: 100vw;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
`;

const TextContainer = styled.div`
  width: 40%;
  height: 100%;
  padding-left: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const ImageContainer = styled.div`
  width: 60%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
`;

const BackgroundImageWrapper = styled(motion.div)`
  top: 0;
  left: 80px;
  position: absolute;
  width: 8%;
  height: 120%;
  background-image: url(${bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
`;

const VideoImageWrapper = styled.video`
    width: 100%;
    object-fit: cover;
`

const VideoAnimationWrapper = styled(motion.div)`
  width: 83%;
  z-index: 3;
`

const LinkItem = styled(Link)`
  text-decoration: none;
  color: #000;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 0.5px;
  margin-top: 60px;
  border-bottom: 1px solid #000;
`;



export default LeftCarousel;
