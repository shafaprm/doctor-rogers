import styled from 'styled-components';

import Adds from './Adds.js';
import Links from './Links.js'

const Navbar = () => {

    const LeftLinksArr = [
        {
          name: "SHOP",
          link: "#",
        }, 
        {
          name: "ABOUT",
          link: "#",
        },
        {
          name: "BLOG",
          link: "#",
        },
      ];

    const RightLinksArr = [
        {
            name: 'SEARCH',
            link: '#',
        },
        {
            name: 'ACCOUNT',
            link: "#"
        },
        {
            name: 'CART',
            link: "#"
        },
    ]

    return (
        <NavbarContainer>
            <Adds />
            <LowerContainer>
                <Links LinksArr = {LeftLinksArr} />
                <h1 style = {{fontFamily: 'Cormorant Garamond', lineHeight: "28px", fontWeight: 300}}>
                    <span style = {{letterSpacing: "1px"}}>DOCTOR</span> <br /> <span style = {{letterSpacing: "2.8px"}}>ROGERS</span>
                </h1>
                <Links LinksArr = {RightLinksArr} />
            </LowerContainer>
        </NavbarContainer>
    )
}

const NavbarContainer = styled.div`
    width: 100vw;
    height: 120px;
    background-color: #fffbf3;
`
const LowerContainer = styled.div`
    display: flex;
    align-items: center;
    height: 83px;
    justify-content: space-between;
    width: 100vw;
    padding: 0 110px;
`

export default Navbar;