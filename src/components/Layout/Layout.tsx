import React, { useEffect, useState } from 'react';
import { ContentLayout, FormLayout, GridLayout, TableLayout, TitleLayout } from './styles';
import Input from '../Input/Input';
import Pokemons from '../Pokemons/Pokemons';
import Form from '../Form/Form';
import { useMutationRemoveDataPokemon } from '../../hook/useMutationData';
import { QUERY_KEY_POKEMON } from '../../constants';
import { useQueryClient } from '@tanstack/react-query';

type Props = {}

const Layout: React.FC<Props> = () => {
  const [pokemonSelected, setPokemonSelected] = useState("")
  const [pokemonRemoved, setPokemonRemoved] = useState("")
  const [openForm, setOpenForm] = useState(false)
  const queryClient = useQueryClient()
  const mutation = useMutationRemoveDataPokemon()

  useEffect(() => {
    if(pokemonRemoved) {
      mutation.mutate(pokemonRemoved)
    }
  }, [pokemonRemoved])

  useEffect(() => {
    if(pokemonSelected) {
      setOpenForm(true)
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY_POKEMON, pokemonSelected]})
    }
  }, [pokemonSelected])

  const onPokemonSelected = (id: string) => {
    setPokemonSelected(id)
    setOpenForm(true)
  }

  return (
    <ContentLayout>
      <TitleLayout>List Pokemons</TitleLayout>
      <GridLayout openForm={openForm}>
        <Input name={"search"} placeholder="Search" />
        <button type="button" name="new" className="add" onClick={() => onPokemonSelected("")} data-testid="new">Nuevo</button>
        <TableLayout openForm={openForm}>
          <Pokemons pokemonSelected={onPokemonSelected} pokemonRemoved={setPokemonRemoved} />
        </TableLayout>
        <FormLayout openForm={openForm}>
          <Form id={pokemonSelected} onCancel={setOpenForm}/>
        </FormLayout>
      </GridLayout>
    </ContentLayout>
  )
}

export default Layout
