import React from 'react';
import { List } from '../List/List';
import { Movie } from '../Movie/Movie';
import { InfoBanner } from '../InfoBanner/InfoBanner';
import { Section } from '../Section/Section';
import './Movies.css';
import { Pagination } from '../Pagination/Pagination';

export const Movies = ({ button, movies }) => {
  return (
    <Section className='movies'>
      {movies.length ? (
        <List listStyle='movies__list'>
          {movies.map((movie) => {
            return <Movie key={movie.id || movie._id} button={button} {...movie} />;
          })}
        </List>
      ) : (
        <InfoBanner info={'Не добавлено ни одного фильма '} />
      )}
      {movies.length >= 3 && <Pagination />}
    </Section>
  );
};
