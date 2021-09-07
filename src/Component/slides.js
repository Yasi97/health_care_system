import React from "react";
import vaccination from "../vaccination.jpg";
import doctor from "../doctor.jpg";
import card from "../card.jpg";

function Slides() {
  return (
    <div className="container-fluid">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={vaccination}
              className="d-block w-100"
              width="640"
              height="360"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={card}
              className="d-block w-100"
              width="640"
              height="360"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={doctor}
              className="d-block w-100"
              width="640"
              height="360"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Slides;
