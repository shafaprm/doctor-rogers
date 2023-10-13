import styled from 'styled-components';

import RightCarousel from './RightCarousel';
import LeftCarousel from './LeftCarousel';
import MiddleCarousel from './MiddleCarousel';

const LandingSection = () => {
    return (
        <LandingContainer>
            <CarouselContainer>
                <LeftCarousel UpperHeading = "Just Launched" LowerHeading = "THE ADVANCE COLLECTION" link = "SHOP TREATMENTS"/>
                {/* <MiddleCarousel UpperHeading = "Just Launched" LowerHeading = "THE ADVANCE COLLECTION" link = "SHOP TREATMENTS"/>
                <RightCarousel UpperHeading = "Just Launched" LowerHeading = "THE ADVANCE COLLECTION" link = "SHOP TREATMENTS"/> */}
            </CarouselContainer>
        </LandingContainer>
    )
}

const LandingContainer = styled.div`
    width: 100%;
    height: 60vw;
    background-color: #fffbf3;
    display: flex;
`

const CarouselContainer = styled.div`
    width: 100vw;
    height: 80vh;
`

export default LandingSection;