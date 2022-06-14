import React from "react";
import Footer from "./Footer";
import * as Styled from "./Layout.styles";
import Nav from "./nav/Nav";

export const Layout = ({ children }) => {
  return (
    <Styled.LayoutContainer>
      <Nav />
      <Styled.PageContainer>{children}</Styled.PageContainer>
      <Footer />
    </Styled.LayoutContainer>
  );
};
