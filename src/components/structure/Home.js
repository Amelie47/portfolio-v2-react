import React from 'react';
import Line from './Line';
import Button from './Button';

import '../scss/home.scss';
import '../scss/element.scss';

import getDatas from '../js/Datas';

import cv from '../../ressources/images/cv/20200913.pdf';
import dnl from '../../ressources/images/dnl.png';

function Home() {
  const datas = getDatas().home;

  return (
    <div className='Home'>
      <div className='relative left-15-vw top-20-vh'>
        <p className='overline'>{datas.title.overline}</p>
        <h1>{datas.title.first}</h1>
        <Line></Line>
        <div className='presentation'>
          <ul>
            <li>{datas.name}</li>
            {Object.keys(datas.items).map((v, i) => (
              <li key={i}>{datas.items[i].name}</li>
            ))}
            <li>
              <a href={cv} target='blank' download>
                <img src={dnl} alt='download button img' />
                Mon cv
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Line h='50' left='50-vw' top='0-vh' name='toDisplayNone'></Line>
      <Button anime='slide-top'></Button>
    </div>
  );
}

export default Home;
