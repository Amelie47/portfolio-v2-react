import React from 'react';
import '../scss/formations.scss';
import Line from './Line';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../scss/slider-slick.scss";

function Formations() {
  var settings = {
    dots: false,
    infinite: true,
    swipeToSlide: true
  };
  return (
    <div className="Formations section">
        <div className="principal_content relative left-15-vw top-20-vh">
        <p className="overline">_Découvertes</p>
        <h1>Formations</h1>
        <Line></Line>
        <div className="content">
          {/* CONTENU */}
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
        </div>
    </div>
  );
}

export default Formations;