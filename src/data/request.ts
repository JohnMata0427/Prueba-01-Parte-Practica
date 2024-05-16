import { type MoviesTypes, type MovieListTypes } from './types';

export async function requestAPI (id: number) {
    try {
      const response = await fetch(`https://api.watchmode.com/v1/title/${id}/details?apiKey=Doj5IQfXEpfu7qmx67TATZlgjMJIV8q6S1FilUHt&append_to_response=sources`);
      const data = (await response.json() as MoviesTypes);
      return data;
    } catch (error) {
      return error;
    }
}

export async function requestAPIList () {
    try {
      const response = await fetch('https://api.watchmode.com/v1/list-titles/?apiKey=Doj5IQfXEpfu7qmx67TATZlgjMJIV8q6S1FilUHt&append_to_response=sources&limit=10');
      const data = (await response.json() as MovieListTypes);
      return data;
    } catch (error) {
      return error;
    }
}