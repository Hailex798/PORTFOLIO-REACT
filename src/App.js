import React from "react";
import "./styles.css";
import "./scripts";
import Navbar from "./components/Navbar";
import Masthead from "./components/Masthead";
import PortfolioSection from "./components/PortfolioSection"
import About from "./components/About"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import Copyright from "./components/Copyright";

const App = () => {
  return (
    <div>
      <Navbar />
      <Masthead />
      <PortfolioSection />
      <About />
      <ContactSection />
      <Footer />
      <Copyright />
    </div>
  );
};

export default App;