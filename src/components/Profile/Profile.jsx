import React from 'react';
import './Profile.css';
import { links } from '../../utils/constants';
import { Links } from '../Links/Links';
import { Avatar } from '../Avatar/Avatar';
import { ProfileInfo } from '../ProfileInfo/ProfileInfo';

export const Profile = () => {
  return (
    <figure className='profile'>
      <ProfileInfo styles={'profile__info'} />
      <Avatar styles={'profile__photo'} />
      <Links listStyle={'profile__links'} socials={links.socials} />
    </figure>
  );
};
