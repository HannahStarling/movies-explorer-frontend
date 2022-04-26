import React from 'react';
import { Article } from '../Article/Article';
import './Articles.css';

export const Articles = () => {
  return (
    <div className='articles'>
      <Article
        title={'Дипломный проект включал 5 этапов'}
        article={'Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.'}
      />
      <Article
        title={'На выполнение диплома ушло 5 недель'}
        article={
          'У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.'
        }
      />
    </div>
  );
};
