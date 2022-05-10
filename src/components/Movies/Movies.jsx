import React, { useEffect } from 'react';
import { List } from '../List/List';
import { Movie } from '../Movie/Movie';
import { InfoBanner } from '../InfoBanner/InfoBanner';
import { Section } from '../Section/Section';
import './Movies.css';

export const Movies = ({ location = '/movies', movies }) => {
  return (
    <Section className='movies'>
      {movies.length ? (
        <List listStyle='movies__list'>
          {/* all */}
          {location === '/movies'
            ? movies.map((movie, movieId) => {
                console.log(movie);
                return <Movie key={movieId} {...movie} />;
              })
            : [...movies].slice(1, 4).map((movie, movieId) => {
                return <Movie location='/saved-movies' key={movieId} {...movie} />;
              })}
        </List>
      ) : (
        <InfoBanner info={'Не добавлено ни одного фильма '} />
      )}
    </Section>
  );
};
