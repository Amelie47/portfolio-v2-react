import React from 'react';
import '../scss/contact.scss';
import Line from './Line';
import datas from '../../ressources/datas/fr.json';

function Contact({titleid}) {

  const section = datas.titles.find((element) => element.id === titleid);

  return (
    <div className="Contact section">
        <div className="principal_content relative left-15-vw top-20-vh">
        <p className="overline">{section.overline}</p>
        <h1>{section.name}</h1>
        <Line></Line>
        <div className="content">
          {/* CONTENU */}
        </div>
        </div>
    </div>
  );
}

export default Contact;