import React from "react";
import boyFace from "../assets/img/logo2.png"

const Masthead = () => {
  return (
    <header className="masthead bg-primary text-white text-center">
      <div className="container d-flex align-items-center flex-column">
        {/* <!-- Masthead Avatar Image--> */}
        <img
          className="masthead-avatar mb-5"
          src= {boyFace}
          alt="..."
          style={{border: "3px solid black", borderRadius: "130px"}}
        />
        {/* <!-- Masthead Heading--> */}
        <h1 className="masthead-heading text-uppercase mb-0">Kshitij Singh Bisht</h1>
        {/* <!-- Icon Divider--> */}
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        {/* <!-- Masthead Subheading--> */}
        <p className="masthead-subheading font-weight-light mb-0" style={{color: "#b581ff"}}>
          Front-End Developer | Freelancer | Engineer
        </p>
      </div>
    </header>
  );
};

export default Masthead;
