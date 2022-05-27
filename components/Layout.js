import React from "react";
import Footer from "./Footer";
import TopNavbar from "./TopNavbar";

export const Layout = ({ children }) => {
  return (
    <div>
      <TopNavbar />
      {children}
      <Footer />
    </div>
  );
};
