import React from 'react';
import Input from '../Input/Input';
import Range from '../Range/Range';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IFormValues } from '../../entities/Pokemon';
import { ButtonsForm, GridForm, ItemForm, TitleForm } from './styles';
import { useQueryDataPokemon } from '../../hook/useQueryData';

type Props = {
  id: string
  onCancel: Function
}

const Form: React.FC<Props> = ({ id, onCancel }) => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<IFormValues>();
  const { data } = useQueryDataPokemon(id)

  const onSubmit: SubmitHandler<IFormValues> = data => {
    console.log('************* data: ', data)
  };

  register('name', { required: true, value: data?.name })
  register('image', { required: true, value: data?.name })
  register('attack', { min: 1, required: true, value: data?.attack })
  register('defense', { min: 1, required: true, value: data?.defense })
  register('hp', { required: true, value: data?.hp })
  register('type', { required: true, value: data?.type })

  return (
    <>
      <TitleForm>New Pokemon</TitleForm>
      <form onSubmit={handleSubmit(onSubmit)} data-testid="form">
        <GridForm>
          <ItemForm>
            <Input name={"name"} label={"Name"} setValue={setValue} className={errors?.name ? 'error' : ''} value={data?.name} />
          </ItemForm>
          <ItemForm>
            <Input name={"hp"} label={"Hard Power"} setValue={setValue} className={errors?.hp ? 'error' : ''} value={`${data?.hp ?? ''}`} />
          </ItemForm>
          <ItemForm>
            <Input name={"type"} label={"Type"} setValue={setValue} className={errors?.type ? 'error' : ''} value={data?.type} />
          </ItemForm>
          <ItemForm>
            <Input name={"image"} label={"Image"} setValue={setValue} className={errors?.image ? 'error' : ''} value={data?.image} />
          </ItemForm>
          <ItemForm>
            <Range name={"attack"} label={"Attack"} setValue={setValue} className={errors?.attack ? 'error' : ''} value={data?.attack} />
          </ItemForm>
          <ItemForm>
            <Range name={"defense"} label={"Defense"} setValue={setValue} className={errors?.defense ? 'error' : ''} value={data?.defense} />
          </ItemForm>
          <ButtonsForm>
            <button type="submit" data-testid="submit">Guardar</button>
            <button type="reset" data-testid="cancel" onClick={() => onCancel(false)}>Cancelar</button>
          </ButtonsForm>
        </GridForm>
      </form>
    </>
  )
}

export default Form
