import React from "react";
import Corausel from "../components/Corausel";
import Footer from "../components/Footer";
import HDAW from "../components/HDAW";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Landing = () => {
  return (
    <div className="bg-orange-200">
      <Navbar />
      <Header />
      <Corausel />
      <HDAW />
      <Footer />
    </div>
  );
};

export default Landing;
