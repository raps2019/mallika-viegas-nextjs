import styled from "styled-components";

export const NavLink = styled.a`
  font-size: 0.8rem;
  text-decoration: none;
  transition: all 250ms ease-in;
  letter-spacing: 0.2rem;

  &::after {
    content: "";
    width: 100%;
    height: 0.25rem;
    display: block;
    transform: scaleX(0);
    transform-origin: left;
    transition: all 250ms ease-in;
    background: black;
    background: ${props => props.theme.accent1};
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
  height: 8rem;
  min-height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 2;
  background: green;
  position: absolute;
  top: 0;
`;
