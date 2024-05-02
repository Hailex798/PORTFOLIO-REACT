import React from "react";

export default function About() {
  return (
    <section className="page-section text-white mb-0" id="about" style={{backgroundColor: "#141416"}}>
      <div className="container">
        {/* <!-- About Section Heading--> */}
        <h2 className="page-section-heading text-center text-uppercase" style={{color: "#b581ff"}}>
          ABOUT ME
        </h2>
        {/* <!-- Icon Divider--> */}
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        {/* <!-- About Section Content--> */}
        <div className="row" data-aos="zoom-in" data-aos-duration="1000">
          <div className="col-lg-16 ms-auto text-center">
            <p className="lead">
            Hey there! I'm Kshitij, a Front-end dev hailing ready to conquer the web with my multiway code moves!<br />Pursuing my B.Tech in Computer Science. Crafting stunning web experiences is my jam, and I'm all about making pixels dance to the beat of a groovy user experience.
            <br />Let's engage and create some web magic! 🚀😎
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
