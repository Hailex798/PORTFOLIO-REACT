import React from "react";

const Footer = () => {
  return (
    <footer className="footer text-center">
      <div className="container">
        <div className="row">
          {/* <!-- Footer Location--> */}
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4" style={{color: "#141416"}}>Location</h4>
            <p className="lead mb-0">
              Kanpur, Uttar Pradesh
              <br />
              India
            </p>
          </div>
          {/* <!-- Footer Social Icons--> */}
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4" style={{color: "#141416"}}>Around the Web</h4>
            <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/Hailex798" target="_blank" rel="noreferrer">
              <i className="fab fa-fw fa-github"></i>
            </a>
            <a className="btn btn-outline-light btn-social mx-1" href="https://twitter.com/stoickshitij" target="_blank" rel="noreferrer">
              <i className="fab fa-fw fa-twitter"></i>
            </a>
            <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/kshitijsinghbisht" target="_blank" rel="noreferrer">
              <i className="fab fa-fw fa-linkedin-in"></i>
            </a>
            <a className="btn btn-outline-light btn-social mx-1" href="https://linktr.ee/kshitijsinghbisht" target="_blank" rel="noreferrer">
              <i className="fa fa-user"></i>
            </a>
          </div>
          {/* <!-   - Footer About Text--> */}
          <div className="col-lg-4">
            <h4 className="text-uppercase mb-4" style={{color: "#141416"}}>About Services</h4>
            <p className="lead mb-0">
              Contact me about queries<br />
              <a href="http://localhost:3000/#contact">Contact</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;