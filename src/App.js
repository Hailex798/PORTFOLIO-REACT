import React from "react";
import "./styles.css";
import "./scripts";
import Navbar from "./components/Navbar";
import Masthead from "./components/Masthead";
import Copyright from "./components/Copyright";
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div>
      <Navbar />
      <Masthead />
      <ContactSection />
      <Footer />
      <Copyright />
    </div>
  );
};

export default App;
