import React from 'react';
import { LinedTitle } from '../LinedTitle/LinedTitle';
import { Portfolio } from '../Portfolio/Portfolio';
import { Profile } from '../Profile/Profile';
import { Section } from '../Section/Section';
import './About.css';

export const About = () => {
  return (
    <Section type={'white'}>
      <LinedTitle title={'Студент'} />
      <Profile />
      <Portfolio />
    </Section>
  );
};
