import React from 'react';
import { List } from '../List/List';
import { Anchor } from '../Anchor/Anchor';

export const Links = ({
  socials,
  sites,
  portfolio,
  linkStyle,
  listStyle,
  className = '',
  ...props
}) => {
  return (
    <List listStyle={listStyle}>
      {sites &&
        sites.map(({ id, ...props }) => {
          return (
            <li key={id} className={linkStyle}>
              <Anchor {...props} />
            </li>
          );
        })}
      {socials &&
        socials.map(({ id, ...props }) => {
          return (
            <li key={id} className={linkStyle}>
              <Anchor {...props} />
            </li>
          );
        })}

      {portfolio &&
        portfolio.map(({ id, ...props }) => {
          return (
            <li key={id} className={linkStyle}>
              <Anchor {...props}>
                <span>↗</span>
              </Anchor>
            </li>
          );
        })}
    </List>
  );
};
