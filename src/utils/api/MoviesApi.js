import request from './helpers';
import { MOVIES_API_URL } from './constants';

export const getMoviesData = () => request(MOVIES_API_URL, { method: 'GET' });
