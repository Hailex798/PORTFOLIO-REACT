import React from "react"

export default function PortfolioModal(props){
    return(
        <div
        className="portfolio-modal modal fade"
        id={props.data}
        tabindex="-1"
        aria-labelledby={props.data}
        aria-hidden="true"
        >
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                <div className="modal-header border-0">
                    <button
                    className="btn-close"
                    type="button"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    ></button>
                </div>
                <div className="modal-body text-center pb-5">
                    <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                        {/* <!-- Portfolio Modal - Title--> */}
                        <h2
                            className="portfolio-modal-title text-secondary text-uppercase mb-0"
                        >
                            {props.head}
                        </h2>
                        {/* <!-- Icon Divider--> */}
                        <div className="divider-custom">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon">
                            <i className="fas fa-star"></i>
                            </div>
                            <div className="divider-custom-line"></div>
                        </div>
                        {/* <!-- Portfolio Modal - Image--> */}
                        <img
                            className="img-fluid rounded mb-5"
                            src={props.img}
                            alt="..."
                        />
                        {/* <!-- Portfolio Modal - Text--> */}
                        <p className="mb-4">
                            {props.content}
                        </p>
                        <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                            <div>
                                <button className="btn btn-primary m-2" onClick={()=>window.open("kshitijsinghbisht.netlify.app")}>
                                    <i className="fas fa-link fa-fw"></i>
                                    Link
                                </button>
                                <button className="btn btn-primary m-2" onClick={()=>window.open("https://github.com/Hailex798/PORTFOLIO-REACT")}>
                                    <i className="fas fa-github fa-fw" />
                                    Github
                                </button>
                            </div>
                            <button className="btn btn-primary" data-bs-dismiss="modal">
                                <i className="fas fa-xmark fa-fw"></i>
                                Close Window
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}