import React from 'react';
import { Paragraph } from '../Paragraph/Paragraph';
import './Article.css';

export const Article = ({ title, article, ...props }) => {
  return (
    <article className='article' {...props}>
      <h3 className='article__title'>{title}</h3>
      <Paragraph>{article}</Paragraph>
    </article>
  );
};
