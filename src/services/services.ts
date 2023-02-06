import axios from 'axios';
import { Pokemon } from '../entities/Pokemon';
import { BASE_ENDPOINT } from '../constants';
import { QueryFunctionContext } from '@tanstack/query-core/src/types';

export const getDataPokemon = (): Promise<Pokemon[]> => {
  const url = `${BASE_ENDPOINT}/pokemon/?idAuthor=1`;
  return axios.get(url).then((response) => response.data)
}

export const getDataPokemonById = ({ queryKey }: QueryFunctionContext<string[]>): Promise<Pokemon> =>
  axios.get(`${BASE_ENDPOINT}/pokemon/${queryKey[1]}`).then((response) => response.data)

export const postDataPokemon = (data: Pokemon): Promise<Pokemon> =>
  axios.post(`${BASE_ENDPOINT}/pokemon/`, data).then((response) => response.data)

export const putDataPokemon = (data: Pokemon): Promise<Pokemon> =>
  axios.put(`${BASE_ENDPOINT}/pokemon/${data.id}`, data).then((response) => response.data)

export const deleteDataPokemon = (id: string): Promise<any> =>
  axios.delete(`${BASE_ENDPOINT}/pokemon/${id}`).then((response) => response.data)
