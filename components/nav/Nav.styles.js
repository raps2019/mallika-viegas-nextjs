import styled from "styled-components";

export const NavLink = styled.a`
  font-size: 0.8rem;
  text-decoration: none;
  transition: all 250ms ease-in;
  letter-spacing: 0.2rem;
  padding: 0 1rem;
  font-weight: 700;


  &::after {
    content: "";
    width: 100%;
    height: 0.25rem;
    display: block;
    transform: scaleX(0);
    transform-origin: left;
    transition: all 250ms ease-in;
    background: black;
    background: ${props => props.theme.linkHighlight};
  }

  &:hover::after {
    transform: scaleX(1);
  }
  &.active::after {
    transform: scaleX(1);
  }
`;

export const TopNavContainer = styled.div`
  width: 100%;
  height: 6rem;
  min-height: 6rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  top: 0;
  z-index: 2;
  background: ${props => props.theme.navBackground};
  top: 0;
`;

export const RightNavContainer = styled.div`
display: flex;
`
