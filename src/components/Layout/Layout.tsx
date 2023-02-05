import React from 'react';
import { ContentLayout, FormLayout, GridLayout, TableLayout, TitleLayout } from './styles';
import Input from '../Input/Input';
import Pokemons from '../Pokemons/Pokemons';
import Form from '../Form/Form';

type Props = {}

const Layout: React.FC<Props> = () => {

  return (
    <ContentLayout>
      <TitleLayout>List Pokemons</TitleLayout>
      <GridLayout>
        <Input name={"search"} label={"search"} placeholder="Search" />
        <button type="button" name="new" className="add">Nuevo</button>
        <TableLayout>
          <Pokemons />
        </TableLayout>
        <FormLayout>
          <Form/>
        </FormLayout>
      </GridLayout>
    </ContentLayout>
  )
}

export default Layout
