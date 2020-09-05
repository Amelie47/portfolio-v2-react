import React from 'react';
import '../scss/contact.scss';
import Line from './Line';
import datas from '../../ressources/datas/fr.json';

import{ init } from 'emailjs-com';
init("user_7NOlDEXLiVCNQvWtb0N14");

function Contact({titleid}) {

  const section = datas.titles.find((element) => element.id === titleid);

  return (
    <div className="Contact section">
        <div className="principal_content relative left-15-vw top-20-vh">
        <p className="overline">{section.overline}</p>
        <h1>{section.name}</h1>
        <Line></Line>
        <div className="content left-5-vw">
          <div className="contactMail">
              <h2>Par mail</h2>
              <div className="mailContent">
                <p className="email">contact@amelie-mouillac.fr</p>
                <div className="mailForm">

                <form className="formSendMail">
                  <div className="formDivItem">
                    <input type="text" name="name" id="name" required placeholder="Nom, prénom *"/>
                  </div>
                  <div className="formDivItem">
                    <input type="email" name="email" id="email" required placeholder="Email *"/>
                  </div>
                  <div className="formDivItem">
                    <input type="text" name="object" id="object" required placeholder="Objet *"/>
                  </div>
                  <div className="formDivItem">
                    <textarea id="story" name="story" rows="5" cols="33" placeholder="Message *"/>
                  </div>
                  <div className="formDivItem">
                    <button type="submit">Envoyer</button>
                  </div>
                </form>

                </div>
              </div>
          </div>
          <div className="contactTel">
            <h2>Par téléphone</h2>
            <p>07 • 81 • 79 • 53 • 36</p>
          </div>
        </div>
        </div>
    </div>
  );

}

export default Contact;