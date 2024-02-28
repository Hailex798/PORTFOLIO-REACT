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
                        <h6>{props.contentHead}</h6>
                        <p className="mb-4">
                            {props.content}
                        </p>
                        <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                            <div>
                                <button className="btn btn-primary m-2 enlarge" onClick={()=>window.open(props.link)}>
                                    <i className="fas fa-link fa-fw"></i>
                                    <span class="m-lg-1">Link</span>
                                </button>
                                <button className="btn btn-primary m-2 enlarge" onClick={()=>window.open(props.github)}>
                                    <i class="fa-brands fa-github fa-flip" style={{color: "#ffffff"}} ></i>
                                     <span class="m-lg-1">Github</span>
                                </button>
                            </div>
                            <button className="btn btn-primary enlarge" data-bs-dismiss="modal">
                                <i className="fas fa-xmark fa-fw"></i>
                                <span class="m-lg-1">Close Window</span>
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