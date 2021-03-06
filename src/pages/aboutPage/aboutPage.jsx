import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './aboutPage.css';
import czechitas from '../../img/Czechitas.png';
import pipedrive from '../../img/pipedrive.png';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="aboutUsPage">
      <h1>SwapApp by Marie&Magdalena</h1>
      <p>
        Jsme Marie&Magdalena a tohle je první a zatím jediný swapovací web v
        Čechách. Vytvořily jsme ho s láskou pro lidi, jako jsme my. Kteří
        nepotřebné věci raději pošlou dál, než vyhodí. Kteří si potřebné věci
        raději pořídí z druhé ruky, než nové.
      </p>
      <p>
        Tahle aplikace je náš absolventský projekt v rámci podzimního běhu
        Digitální akademie:Web 2020.
      </p>
      <p>
        Děkujeme Czechitas za organizaci, Martinovi, Filipům, Sergejovi, Petrovi
        a spol za lektorování a koučování.
      </p>
      <p>
        Děkujeme Leně a Zuzce a všem ostatním holkám za skvělou atmosféru a
        vzájemnou podporu.
      </p>
      <p>
        Náš nekonečný vděk patří taky Lukášovi, Rosťovi a Tomášovi z Pipedrive
        za mentorování a láskyplnou péči. A fotbálkové bitvy. A víno.
      </p>
      <div className="logo_contact">
        <div className="logoElm">
          <Link className="czechitas" to="https://www.czechitas.cz/cs/">
            <img
              className="czechitasLogo"
              src={czechitas}
              alt="logo czechitas"
            />{' '}
          </Link>
          <Link className="pipedrive" to="https://www.pipedrive.com/">
            <img
              className="pipedriveLogo"
              src={pipedrive}
              alt="logo pipedrive"
            />{' '}
          </Link>
        </div>
        <div>
          <a href={`mailto: swapapp@zohomail.eu`}>
            <button className="mailBtn">Napište nám</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
