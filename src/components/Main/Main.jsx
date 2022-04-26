import React from 'react';
import { AboutProject } from '../AboutProject/AboutProject';
import { Promo } from '../Promo/Promo';
import { Tech } from '../Tech/Tech';
import { About } from '../About/About';
import './Main.css';

export const Main = ({ colored }) => {
  return (
    <main className={`main`}>
      <Promo />
      <AboutProject />
      <Tech />
      <About />
    </main>
  );
};
