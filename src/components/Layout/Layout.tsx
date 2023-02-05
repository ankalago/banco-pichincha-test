import React from 'react';
import { ButtonsForm, Content, Form, Grid, GridForm, ItemForm, Table, Title, TitleForm } from './styles';
import Input from '../Input/Input';
import Range from '../Range/Range';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IFormValues } from '../../entities/Pokemon';

type Props = {}

const Layout: React.FC<Props> = () => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = data => {
    console.log('************* data: ', data)
  };

  register('name', { required: true })
  register('image', { required: true })
  register('attack', { min: 1, required: true })
  register('defense', { min: 1, required: true })
  register('hp', { required: true })
  register('type', { required: true })

  return (
    <Content>
      <Title>List Pokemons</Title>
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <GridForm>
              <ItemForm>
                <Input name={"name"} label={"Name"} setValue={setValue} className={errors?.name ? 'error' : ''} />
              </ItemForm>
              <ItemForm>
                <Input name={"hp"} label={"Hard Power"} setValue={setValue} className={errors?.hp ? 'error' : ''} />
              </ItemForm>
              <ItemForm>
                <Input name={"type"} label={"Type"} setValue={setValue} className={errors?.type ? 'error' : ''} />
              </ItemForm>
              <ItemForm>
                <Input name={"image"} label={"Image"} setValue={setValue} className={errors?.image ? 'error' : ''} />
              </ItemForm>
              <ItemForm>
                <Range name={"attack"} label={"Attack"} setValue={setValue} className={errors?.attack ? 'error' : ''} />
              </ItemForm>
              <ItemForm>
                <Range name={"defense"} label={"Defense"} setValue={setValue} className={errors?.defense ? 'error' : ''} />
              </ItemForm>
              <ButtonsForm>
                <button type="submit" data-testid="submit">Guardar</button>
                <button type="reset" data-testid="cancel">Cancelar</button>
              </ButtonsForm>
            </GridForm>
          </form>
        </Form>
      </Grid>
    </Content>
  )
}

export default Layout
