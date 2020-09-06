import React from 'react';
import '../scss/contact.scss';
import Line from './Line';
import getDatas from '../js/Datas';

import { init } from 'emailjs-com';
init('user_7NOlDEXLiVCNQvWtb0N14');

function Contact({ titleid }) {
  const section = getDatas().titles.find((element) => element.id === titleid);
  const datas = getDatas().contact;

  return (
    <div className='Contact section'>
      <div className='principal_content relative left-15-vw top-20-vh'>
        <p className='overline'>{section.overline}</p>
        <h1>{section.name}</h1>
        <Line></Line>
        <div className='content left-5-vw'>
          <div className='contactMail'>
            <h2>{datas.mail.title}</h2>
            <div className='mailContent'>
              <p className='email'>{datas.mail.content}</p>
              <div className='mailForm'>
                <form className='formSendMail'>
                  <div className='formDivItem'>
                    <input
                      type='text'
                      name='name'
                      id='name'
                      required
                      placeholder={datas.form.inputName}
                    />
                  </div>
                  <div className='formDivItem'>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      required
                      placeholder={datas.form.inputMail}
                    />
                  </div>
                  <div className='formDivItem'>
                    <input
                      type='text'
                      name='object'
                      id='object'
                      required
                      placeholder={datas.form.inputTopic}
                    />
                  </div>
                  <div className='formDivItem'>
                    <textarea
                      id='story'
                      name='story'
                      rows='5'
                      cols='33'
                      placeholder={datas.form.inputMessage}
                    />
                  </div>
                  <div className='formDivItem'>
                    <button type='submit'>{datas.form.formsend}</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className='contactTel'>
            <h2>{datas.tel.title}</h2>
            <p>{datas.tel.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
