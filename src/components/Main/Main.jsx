import React from 'react';
import { AboutProject } from '../AboutProject/AboutProject';
import { Promo } from '../Promo/Promo';
import { Tech } from '../Tech/Tech';
import { About } from '../About/About';
import './Main.css';
import Header from '../Header/Header';
import { Footer } from '../Footer/Footer';

export const Main = ({ colored }) => {
  return (
    <>
      <Header type='pink' />
      <main className={`main`}>
        <Promo />
        <AboutProject />
        <Tech />
        <About />
      </main>
      <Footer />
    </>
  );
};
