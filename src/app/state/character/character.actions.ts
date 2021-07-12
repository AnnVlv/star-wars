import { Character } from '../../shared/interfaces';


export const GET_CHARACTERS = 'GET_CHARACTERS';
export const GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS';
export const GET_CHARACTERS_FAIL = 'GET_CHARACTERS_FAIL';

export const GET_CHARACTER = 'GET_CHARACTER';
export const GET_CHARACTER_SUCCESS = 'GET_CHARACTER_SUCCESS';
export const GET_CHARACTER_FAIL = 'GET_CHARACTER_FAIL';

export const getCharacters = () => ({
  type: GET_CHARACTERS,
});

export const getCharactersSuccess = (payload: Character[]) => ({
  type: GET_CHARACTERS_SUCCESS,
  payload,
});

export const getCharactersFail = () => ({
  type: GET_CHARACTERS_FAIL,
});

export const getCharacter = (payload: number) => ({
  type: GET_CHARACTER,
  payload,
});

export const getCharacterSuccess = (payload: Character[]) => ({
  type: GET_CHARACTER_SUCCESS,
  payload,
});

export const getCharacterFail = () => ({
  type: GET_CHARACTER_FAIL,
});
