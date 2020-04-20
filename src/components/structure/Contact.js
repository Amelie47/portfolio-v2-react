import React from 'react';
import '../scss/contact.scss';
import Line from './Line';

function Contact() {
  return (
    <div className="Contact">
        <div className="relative left-15-vw top-20-vh">
        <p className="overline">_Gardons_le_contact</p>
        <h1>Contact</h1>
        <Line></Line>
        <div className="content">
          {/* CONTENU */}
        </div>
        </div>
    </div>
  );
}

export default Contact;