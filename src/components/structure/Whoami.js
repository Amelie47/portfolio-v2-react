import React from 'react';
import '../scss/whoami.scss';
import Line from './Line';
import portrait from '../../ressources/images/portrait.png';
import getDatas from '../js/Datas';

function Whoami({ titleid }) {
  const datas = getDatas().whoami;
  const section = getDatas().titles.find((element) => element.id === titleid);

  return (
    <div className='Whoami section' id={section.section_id}>
      <Line h='10' left='15-vw'></Line>
      <Line h='30' right='50-vw'></Line>
      <div className='principal_content relative left-15-vw top-20-vh'>
        <p className='overline'>{section.overline}</p>
        <h1>{section.name}</h1>
        <Line name='toDisplayNone'></Line>
        <img src={portrait} alt='portrait' />
        <div className='content'>
          {Object.keys(datas).map((v, i) => (
            <p dangerouslySetInnerHTML={{ __html: datas[i] }} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Whoami;
