import { Film } from '../../shared/interfaces';


export const GET_FILM = 'GET_FILM';
export const GET_FILM_SUCCESS = 'GET_FILM_SUCCESS';
export const GET_FILM_FAIL = 'GET_FILM_FAIL';

export const getFilm = (payload: number) => ({
  type: GET_FILM,
  payload,
});

export const getFilmSuccess = (payload: Film[]) => ({
  type: GET_FILM_SUCCESS,
  payload,
});

export const getFilmFail = () => ({
  type: GET_FILM_FAIL,
});
