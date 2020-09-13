import React, { useState, useEffect } from "react";
//import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './SlideShow.css'

function SlideShow() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
      });
  }, []);

  let settings = {
    infinitive: true,
    speed: 800,
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:true
        },
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 2,
      //   },
      // },
    ],
  };
  return (
    <div className="container">
      {images.length === 0 ? (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <Slider {...settings}>
          {images.map((current) => (
            <div className="out" key={current.id}>
              <div className="card">
                <img className="pictureOnDisplay"
                  // className="rounded-circle"
                  alt={"users here"}
                  src={`https://source.unsplash.com/random/${current.id}`}
                  height={56}
                  width={56}
                />
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}

export default SlideShow;
