import { Film } from '../../shared/interfaces';
import { GET_FILM, GET_FILM_FAIL, GET_FILM_SUCCESS } from './film.actions';
import { getIdFromUrl } from '../../shared/utils';


export interface FilmStateModel {
  entities: {[key: number]: Film};
  ids: number[];
  loading: boolean;
}

const initialState: FilmStateModel = {
  entities: {},
  ids: [],
  loading: false,
};

export function filmsReducer(state = initialState, {type, payload}): FilmStateModel {
  switch (type) {
    case GET_FILM:
      return Object.assign({}, state, {
        loading: true,
      });
    case GET_FILM_SUCCESS:
      const ids = [...new Set([
        ...state.ids,
        ...payload.map(({url}) => getIdFromUrl(url)),
      ])];
      const entities = payload.reduce((acc, entity) => {
        const id = getIdFromUrl(entity?.url);
        acc[id] = entity;
        return acc;
      }, {});
      return Object.assign({}, state, {
        loading: false,
        ids,
        entities: {
          ...state.entities,
          ...entities,
        },
      });
    case GET_FILM_FAIL:
      return Object.assign({}, state, {
        loading: false,
        ids: [],
        entities: {},
      });
    default:
      return state;
  }
}
