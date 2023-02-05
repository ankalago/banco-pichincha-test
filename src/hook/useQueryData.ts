import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY_POKEMON, QUERY_KEY_POKEMONS } from '../constants';
import { UseQueryResult } from '@tanstack/react-query/src/types';
import { Pokemon } from '../entities/Pokemon';
import { getDataPokemon, getDataPokemonById } from '../services/services';

export const useQueryDataPokemons = (): UseQueryResult<Pokemon[], any> => {
  const { ...data } = useQuery<unknown, unknown, Pokemon[], string[]>({
    queryKey: [QUERY_KEY_POKEMONS],
    queryFn: getDataPokemon
  })

  return data
}

export const useQueryDataPokemon = (slug: string): UseQueryResult<Pokemon, any> => {
  const { ...data } = useQuery<unknown, unknown, Pokemon, string[]>({
    queryKey: [QUERY_KEY_POKEMON, slug],
    queryFn: getDataPokemonById
  })

  return data
}
