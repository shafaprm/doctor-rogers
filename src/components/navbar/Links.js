import styled from "styled-components";

import { Link } from "react-router-dom";

const Links = ({LinksArr}) => {


  return (
    <LinkContainer>
      {LinksArr.map((link) => {
        return (
          <li style={{ listStyle: "none" }}>
            <LinkItem
              style={{
                textDecoration: "none",
                color: "#000",
                fontFamily: "Roboto",
                fontWeight: 500,
                fontSize: "11px",
                letterSpacing: '0.5px',
              }}
              to={link.link}
            >
              {link.name}
            </LinkItem>
          </li>
        );
      })}
    </LinkContainer>
  );
};

const LinkContainer = styled.ul`
  display: flex;
  width: 11%;
  align-items: center;
  justify-content: space-between;
`;

const LinkItem = styled(Link)`
  &:hover{
    border-bottom: 1px solid #000;
  }
`


export default Links;
