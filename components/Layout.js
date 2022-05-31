import React from "react";
import Footer from "./Footer";
import TopNav from "./nav/TopNav";

export const Layout = ({ children }) => {
  return (
    <div>
      <TopNav />
      {children}
      <Footer />
    </div>
  );
};
