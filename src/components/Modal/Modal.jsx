import React from 'react';
import { Button } from '../Button/Button';
import { Paragraph } from '../Paragraph/Paragraph';
import { LinedTitle } from '../LinedTitle/LinedTitle';
import './Modal.css';

export const Modal = ({ name, status, onClose, isOpen = false }) => {
  // let text;

  // switch (status) {
  //   case value:
  //     break;

  //   default:
  //     break;
  // }

  return (
    <aside className={`modal ${isOpen ? 'modal_opened' : ''}`.trim()}>
      <div className={`modal__container ${isOpen ? 'modal__container_opened' : ''}`.trim()}>
        <Button onClick={onClose} className='modal__btn' />
        <LinedTitle title={status} className={'modal__title'} />
        <Paragraph text={name} className={'modal__text'} />
      </div>
    </aside>
  );
};
