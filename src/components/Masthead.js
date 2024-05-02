import React from "react";
import boyFace from "../assets/img/logo4.png"
import { styled } from "styled-components";

const Masthead = () => {
  return (
    <Wrapper>
      <header className="masthead bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column" data-aos="fade-up" data-aos-duration="2000">
          {/* <!-- Masthead Avatar Image--> */}
          <img
            className="masthead-avatar mb-5"
            src= {boyFace}
            alt="..."
            data-aos="zoom-in" 
            data-aos-duration="1000" 
            data-aos-offset="100"
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
          <p className="masthead-subheading font-weight-light mb-0" style={{color: "#b581ff"}} data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="100" data-aos-mirror="true">
            Freelancer | Front-End Developer | Engineer
          </p>
        </div>
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  @keyframes morph{
    0% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
    50% {
      border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
    }
    100% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
  }
  .masthead-avatar{
    -webkit-animation: morph 8s ease-in-out infinite;
    animation: morph 8s ease-in-out infinite;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border: 3px solid white;
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    height: 15rem;
    position: relative;
    transition: all 1s ease-in-out;
  }
`;

export default Masthead;
