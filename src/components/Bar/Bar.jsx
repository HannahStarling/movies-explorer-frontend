import React from 'react';
import './Bar.css';

export const Bar = () => {
  return (
    <dl className='bar'>
      <dt className='bar__week bar__week_type_black'>1 неделя</dt>
      <dd className='bar__code'>Back-end</dd>
      <dt className='bar__week bar__week_type_gray'>4 недели</dt>
      <dd className='bar__code'>Front-end</dd>
    </dl>
  );
};
