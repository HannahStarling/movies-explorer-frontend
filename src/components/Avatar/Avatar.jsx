import React from 'react';
import foto from '../../images/foto.png';

export const Avatar = ({ styles, ...props }) => {
  return (
    <img
      src={foto}
      alt={'Фотография-аватар автора сайта и владельца портфолио.'}
      className={styles}
    />
  );
};
