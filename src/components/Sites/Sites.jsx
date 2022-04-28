import React from 'react';
import { LINKS } from '../../utils/constants';

export const Sites = () => {
  return (
    <>
      {LINKS.sites.map(({ id, ...props }) => {
        return <SocialLink key={id} {...props} />;
      })}
    </>
  );
};
