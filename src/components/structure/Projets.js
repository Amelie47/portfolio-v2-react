import React from 'react';
import Line from './Line';
import Slider from 'react-slick';
import ProjectSlide from './ProjectStructure/ProjectSlide';

import '../scss/projets.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../scss/slider-slick.scss';

import getDatas from '../js/Datas';

function Projets({ titleid }) {
  const datas = getDatas().projects;
  const section = getDatas().titles.find((element) => element.id === titleid);

  var settings = {
    dots: true,
    dotsClass: 'slick-dots',
    infinite: true,
    swipeToSlide: true,
    customPaging: function (i) {
      return (
        <button>
          {datas[i].name}
          <div
            className='dots-after'
            style={{ backgroundColor: datas[i].couleurs.primaire }}
          ></div>
        </button>
      );
    },
  };

  return (
    <div className='Projets section' id={section.section_id}>
      <div className='principal_content relative left-15-vw top-20-vh'>
        <p className='overline'>{section.overline}</p>
        <h1>{section.name}</h1>
        <Line></Line>
        <div className='content'>
          <Slider {...settings}>
            {Object.keys(datas).map((v, i) => (
              <ProjectSlide
                object={datas[i]}
                id={datas[i].id}
                key={i}
              ></ProjectSlide>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Projets;
