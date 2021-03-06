import {
  GET_CHARACTER,
  GET_CHARACTER_FAIL,
  GET_CHARACTER_SUCCESS,
  GET_CHARACTERS,
  GET_CHARACTERS_FAIL,
  GET_CHARACTERS_SUCCESS,
} from './character.actions';
import { Character } from '../../shared/interfaces';
import { getIdFromUrl } from '../../shared/utils';


export interface CharacterStateModel {
  entities: {[key: number]: Character};
  ids: number[];
  loading: boolean;
}

const initialState: CharacterStateModel = {
  entities: {},
  ids: [],
  loading: false,
};

export function charactersReducer(state = initialState, {type, payload}): CharacterStateModel {
  switch (type) {
    case GET_CHARACTERS:
      return Object.assign({}, state, {
        loading: true,
      });
    case GET_CHARACTER:
      return Object.assign({}, state, {
        loading: true,
      });
    case GET_CHARACTERS_SUCCESS:
    case GET_CHARACTER_SUCCESS:
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
    case GET_CHARACTERS_FAIL:
    case GET_CHARACTER_FAIL:
      return Object.assign({}, state, {
        loading: false,
        ids: [],
        entities: {},
      });
    default:
      return state;
  }
}
