import React from 'react';
import { Articles } from '../Articles/Articles';
import { Bar } from '../Bar/Bar';
import { LinedTitle } from '../LinedTitle/LinedTitle';
import { Section } from '../Section/Section';
import './AboutProject.css';

export const AboutProject = () => {
  return (
    <Section type={'white'}>
      <LinedTitle title={'О проекте'} />
      <Articles />
      <Bar />
    </Section>
  );
};
