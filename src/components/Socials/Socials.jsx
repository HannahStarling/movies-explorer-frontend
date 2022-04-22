import React from 'react';
import './Socials.css';

export const Socials = () => {
  return (
    <ul className='socials list'>
      <li>
        <a className='link' href='https://practicum.yandex.ru' target='_blank' rel='noreferrer'>
          Яндекс.Практикум
        </a>
      </li>
      <li>
        <a className='link' href='https://github.com/HannahStarling' target='_blank' rel='noreferrer'>
          Github
        </a>
      </li>
      <li>
        <a className='link' href='https://ru-ru.facebook.com' target='_blank' rel='noreferrer'>
          Facebook
        </a>
      </li>
    </ul>
  );
};
