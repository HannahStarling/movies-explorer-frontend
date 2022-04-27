import React from 'react';
import { List } from '../List/List';
import { Movie } from '../Movie/Movie';
import { Section } from '../Section/Section';
import './Movies.css';

const movies = [
  { image: 'https://picsum.photos/364/203', nameRU: '33 слова о дизайне', duration: '1ч 47м' },
  { image: 'https://picsum.photos/364/203', nameRU: '33 слова о дизайне', duration: '1ч 47м' },
  { image: 'https://picsum.photos/364/203', nameRU: '33 слова о дизайне', duration: '1ч 47м' },
  { image: 'https://picsum.photos/364/203', nameRU: '33 слова о дизайне', duration: '1ч 47м' },
  { image: 'https://picsum.photos/364/203', nameRU: '33 слова о дизайне', duration: '1ч 47м' },
  { image: 'https://picsum.photos/364/203', nameRU: '33 слова о дизайне', duration: '1ч 47м' },
  { image: 'https://picsum.photos/364/203', nameRU: '33 слова о дизайне', duration: '1ч 47м' },
  { image: 'https://picsum.photos/364/203', nameRU: '33 слова о дизайне', duration: '1ч 47м' },
  { image: 'https://picsum.photos/364/203', nameRU: '33 слова о дизайне', duration: '1ч 47м' },
  { image: 'https://picsum.photos/364/203', nameRU: '33 слова о дизайне', duration: '1ч 47м' },
  { image: 'https://picsum.photos/364/203', nameRU: '33 слова о дизайне', duration: '1ч 47м' },
  { image: 'https://picsum.photos/364/203', nameRU: '33 слова о дизайне', duration: '1ч 47м' },
];

export const Movies = () => {
  return (
    <Section>
      <List listStyle='movies__list'>
        {movies.map((movie, movieId) => {
          return <Movie key={movieId} {...movie} />;
        })}
      </List>
    </Section>
  );
};
