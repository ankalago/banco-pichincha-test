import { useMutation } from '@tanstack/react-query';
import { postDataPokemon } from '../services/services';
import { UseMutationResult } from '@tanstack/react-query/src/types';

export const useMutationDataPokemon = (): UseMutationResult<any, any, any, any> => {
  const mutation = useMutation({
    mutationFn: postDataPokemon
  })

  return { ...mutation }
}
