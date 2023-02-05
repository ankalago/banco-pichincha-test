import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteDataPokemon, postDataPokemon, putDataPokemon } from '../services/services';
import { UseMutationResult } from '@tanstack/react-query/src/types';
import { QUERY_KEY_POKEMONS } from '../constants';

export const useMutationDataPokemon = (): UseMutationResult<any, any, any, any> => {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: postDataPokemon,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY_POKEMONS])
    }
  })

  return { ...mutation }
}

export const useMutationUpdateDataPokemon = (): UseMutationResult<any, any, any, any> => {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: putDataPokemon,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY_POKEMONS])
    }
  })

  return { ...mutation }
}

export const useMutationRemoveDataPokemon = (): UseMutationResult<any, any, any, any> => {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: deleteDataPokemon,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY_POKEMONS])
    }
  })

  return { ...mutation }
}
