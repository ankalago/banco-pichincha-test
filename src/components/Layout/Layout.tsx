import React from 'react';
import { ButtonsForm, Content, Form, Grid, GridForm, ItemForm, Table, Title, TitleForm } from './styles';
import Input from '../Input/Input';
import Range from '../Range/Range';

type Props = {}

const Layout: React.FC<Props> = () => {
  return (
    <Content>
      <Title>
        List Pokemons
      </Title>
      <Grid>
        <input name="" type="text" className="search"/>
        <button type="button" name="" className="add">Nuevo</button>
        <Table>
          <table>
            <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Attack</th>
              <th>Defense</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Pikachu</td>
              <td>image</td>
              <td>123</td>
              <td>34</td>
              <td>icons</td>
            </tr>
            </tbody>
          </table>
        </Table>
        <Form>
          <TitleForm>New Pokemon</TitleForm>
          <form>
            <GridForm>
              <ItemForm>
                <Input name={"name"} label={"Name"} />
              </ItemForm>
              <ItemForm>
                <Range name={"attack"} label={"Attack"} />
              </ItemForm>
              <ItemForm>
                <Input name={"image"} label={"Image"} />
              </ItemForm>
              <ItemForm>
                <Range name={"defense"} label={"Defense"} />
              </ItemForm>
              <ButtonsForm>
                <button type="button">Guardar</button>
                <button type="button">Cancelar</button>
              </ButtonsForm>
            </GridForm>
          </form>
        </Form>
      </Grid>
    </Content>
  )
}

export default Layout
