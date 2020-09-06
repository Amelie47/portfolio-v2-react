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
  const datas = getDatas();
  const section = datas.titles.find((element) => element.id === titleid);

  var settings = {
    dots: true,
    dotsClass: 'slick-dots',
    infinite: true,
    swipeToSlide: true,
    customPaging: function (i) {
      return <a>{datas.projects[i].name}</a>;
    },
  };

  return (
    <div className='Projets section'>
      <div className='principal_content relative left-15-vw top-20-vh'>
        <p className='overline'>{section.overline}</p>
        <h1>{section.name}</h1>
        <Line></Line>
        <div className='content'>
          <Slider {...settings}>
            {Object.keys(datas.projects).map((v, i) => (
              <ProjectSlide object={datas.projects} id={i}></ProjectSlide>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Projets;
