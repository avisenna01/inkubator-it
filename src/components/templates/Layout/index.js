import Navbar from "@/components/moleculs/Navbar";
import Footer from "@/components/organism/Footer";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
