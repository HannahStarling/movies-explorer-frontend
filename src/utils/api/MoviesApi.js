import { request } from './helpers';
import { MOVIES_API_URL, ENDPOINTS } from './constants';

const { beatfilm } = ENDPOINTS;

export const getMoviesData = () =>
  request(`${MOVIES_API_URL}${beatfilm}`, { method: 'GET' }, false);
