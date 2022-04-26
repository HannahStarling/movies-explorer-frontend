import React from 'react';
import { links } from '../../utils/constants';

export const Sites = () => {
  return (
    <>
      {links.sites.map(({ id, ...props }) => {
        return <SocialLink key={id} {...props} />;
      })}
    </>
  );
};
