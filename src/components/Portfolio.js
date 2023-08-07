import React from "react"

export default function Portfolio(props){
    return (
        <div className="col-md-6 col-lg-4 mb-5">
            <div
            className="portfolio-item mx-auto"
            data-bs-toggle="modal"
            data-bs-target={props.data}
            >
            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white">
                <i className="fas fa-plus fa-3x" style={{color: "black"}}></i>
                </div>
            </div>
            <img
                className="img-fluid"
                src={props.img}
                alt="..."
            />
            </div>
        </div>
    )
}