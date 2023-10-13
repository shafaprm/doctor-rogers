import styled from "styled-components";
import { Link } from "react-router-dom";

import img from "../../assets/main-image_carousel-2.webp";
import bgImg from "../../assets/background-img-2.webp";

const RightCarousel = (props) => {
  console.log(props.MainImage);
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
        <MainImageWrapper />
        <BackgroundImageWrapper />
      </ImageContainer>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  width: 100%;
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

const MainImageWrapper = styled.div`
  z-index: 3;
  width: 83%;
  height: 150%;
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
const BackgroundImageWrapper = styled.div`
  top: 0;
  left: 95px;
  position: absolute;
  width: 8%;
  height: 120%;
  background-image: url(${bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

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

export default RightCarousel;
