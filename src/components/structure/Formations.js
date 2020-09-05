import React from 'react';
import '../scss/formations.scss';

import Line from './Line';
import Slider from "react-slick";
import FormationSlide from './FormationSlide';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../scss/slider-slick.scss";

import datas from '../../ressources/datas/fr.json';

function Formations({titleid}) {

  const section = datas.titles.find((element) => element.id === titleid);

  var settings = {
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    swipeToSlide: true,
    customPaging: function(i) {
      return (
        <a>
          {datas.formations[i].acronym}
        </a>
      );
    }
  };

  return (
    <div className="Formations section">
        <div className="principal_content relative left-15-vw top-20-vh">
        <p className="overline">{section.overline}</p>
        <h1>{section.name}</h1>
        <Line></Line>
        <div className="content">
          {/* CONTENU */}
          <Slider {...settings}>
            {Object.keys(datas.formations).map((v, i) => <FormationSlide object={datas.formations} id={i}></FormationSlide> )}
          </Slider>
        </div>
        </div>
    </div>
  );
}

export default Formations;