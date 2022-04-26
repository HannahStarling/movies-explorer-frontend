import React from 'react';
import { List } from '../List/List';
import { TechIcon } from '../TechIcon/TechIcon';
import './TechList.css';

export const TechList = () => {
  const technologies = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'];

  return (
    <List listStyle={'tech__list'}>
      {technologies.map((text, i) => {
        return <TechIcon key={i} text={text} />;
      })}
    </List>
  );
};
