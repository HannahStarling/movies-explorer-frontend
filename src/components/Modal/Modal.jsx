import React from 'react';
import { Button } from '../Button/Button';
import { Paragraph } from '../Paragraph/Paragraph';
import { LinedTitle } from '../LinedTitle/LinedTitle';
import './Modal.css';

export const Modal = ({
  error = { status: 'Ошибка!', text: 'Попробуйте повторить позденее' },
  isOpen = false,
}) => {
  return (
    <aside className={`modal ${isOpen ? 'modal_opened' : ''}`.trim()}>
      <div className={`modal__container ${isOpen ? 'modal__container_opened' : ''}`.trim()}>
        <Button className='modal__btn' />
        <LinedTitle title={error.status} className={'modal__title'} />
        <Paragraph text={error.text} className={'modal__text'} />
      </div>
    </aside>
  );
};
