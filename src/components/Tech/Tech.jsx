import React from 'react';
import { BlockTitle } from '../BlockTitle/BlockTitle';
import { LinedTitle } from '../LinedTitle/LinedTitle';
import { Section } from '../Section/Section';
import { TechList } from '../TechList/TechList';
import { Paragraph } from '../Paragraph/Paragraph';
import './Tech.css';

export const Tech = () => {
  return (
    <Section className='tech' type={'gray'}>
      <LinedTitle title={'Технологии'} />
      <BlockTitle className={'tech__title'} title={'7 технологий'} />
      <Paragraph
        className='tech__description'
        text={'На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.'}
      />
      <TechList />
    </Section>
  );
};
