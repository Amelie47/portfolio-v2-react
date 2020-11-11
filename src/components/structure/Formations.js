import React from 'react';
import '../scss/formations.scss';

import Line from './Line';
import Slider from 'react-slick';
import FormationSlide from './FormationSlide';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../scss/slider-slick.scss';

import getDatas from '../js/Datas';

function Formations({ titleid }) {
  const datas = getDatas().formations;
  const section = getDatas().titles.find((element) => element.id === titleid);

  var settings = {
    dots: true,
    dotsClass: 'slick-dots',
    infinite: true,
    swipeToSlide: true,
    customPaging: function (i) {
      return <button>{datas.slides[i].acronym}</button>;
    },
  };

  return (
    <div className='Formations section' id={section.section_id}>
      <div className='principal_content relative left-15-vw top-20-vh'>
        <p className='overline'>{section.overline}</p>
        <h1>{section.name}</h1>
        <Line></Line>
        <div className='content'>
          {/* CONTENU */}
          <Slider {...settings}>
            {Object.keys(datas.slides).map((v, i) => (
              <FormationSlide
                object={datas.slides}
                id={i}
                key={i}
              ></FormationSlide>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Formations;
