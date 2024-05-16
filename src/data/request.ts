import { type MoviesTypes, type MovieListTypes } from './types';

export async function requestAPI (id: number) {
    try {
      const response = await fetch(`https://api.watchmode.com/v1/title/${id}/details?apiKey=M8kai80oTOyD4A55dvZpwUdPjJbhE25VhlQ63v3n&append_to_response=sources`);
      const data = (await response.json() as MoviesTypes);
      return data;
    } catch (error) {
      return error;
    }
}

export async function requestAPIList () {
    try {
      const response = await fetch('https://api.watchmode.com/v1/list-titles/?apiKey=M8kai80oTOyD4A55dvZpwUdPjJbhE25VhlQ63v3n&append_to_response=sources&limit=15');
      const data = (await response.json() as MovieListTypes);
      return data;
    } catch (error) {
      return error;
    }
}