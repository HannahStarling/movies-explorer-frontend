import React from 'react';
import { BlockTitle } from '../BlockTitle/BlockTitle';
import { Paragraph } from '../Paragraph/Paragraph';
import './ProfileInfo.css';

export const ProfileInfo = ({ styles, ...props }) => {
  return (
    <figcaption className={styles}>
      <BlockTitle className={'profile__title'} title={'Виталий'} />
      <Paragraph className='profile__description' text='Фронтенд-разработчик, 30&nbsp;лет' />
      <Paragraph
        className='profile__text'
        text='Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ. У&nbsp;меня есть жена и&nbsp;дочь.
        Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. С&nbsp;2015 года работал
        в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, как прошёл курс по&nbsp;веб-разработке, начал заниматься
        фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.'
      />
    </figcaption>
  );
};
