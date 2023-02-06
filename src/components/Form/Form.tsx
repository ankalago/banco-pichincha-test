import React, { useEffect } from 'react';
import Input from '../Input/Input';
import Number from '../Number/Number';
import Range from '../Range/Range';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IFormPokemon } from '../../entities/Pokemon';
import { ButtonsForm, GridForm, ItemForm, TitleForm } from './styles';
import { useQueryDataPokemon } from '../../hook/useQueryData';
import { useMutationInsertDataPokemon, useMutationUpdateDataPokemon } from '../../hook/useMutationData';
import { mapperPostDataPokemon, mapperPutDataPokemon } from '../../adapter/pokemon';

type Props = {
  id: string
  onCancel: Function
}

const Form: React.FC<Props> = ({ id, onCancel }) => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<IFormPokemon>();
  const { data, isFetching } = useQueryDataPokemon(id)
  const mutationUpdate = useMutationUpdateDataPokemon()
  const mutationInsert = useMutationInsertDataPokemon()

  const onSubmit: SubmitHandler<IFormPokemon> = data => {
    if (id) {
      mutationUpdate.mutate(mapperPutDataPokemon(id, data))
    } else {
      mutationInsert.mutate(mapperPostDataPokemon(data))
    }
    onCancel(false)
  };

  register('name', { required: true })
  register('image', { required: true })
  register('attack', { min: 1, required: true })
  register('defense', { min: 1, required: true })
  register('hp', { min: 1, required: true })
  register('type', { required: true })

  useEffect(() => {
    setValue('name', data?.name || "")
    setValue('image', data?.image || "")
    setValue('attack', data?.attack || 0)
    setValue('defense', data?.defense || 0)
    setValue('hp', data?.hp || 0)
    setValue('type', data?.type || "")
  }, [data])

  return (
    <>
      <TitleForm>New Pokemon</TitleForm>
      <form onSubmit={handleSubmit(onSubmit)} data-testid="form">
        <GridForm>
          <ItemForm>
            <Input name={"name"} label={"Name"} setValue={setValue} className={errors?.name ? 'error' : ''} value={data?.name} />
          </ItemForm>
          <ItemForm>
            <Number name={"hp"} label={"Hard Power"} setValue={setValue} className={errors?.hp ? 'error' : ''} value={data?.hp} />
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
            <button type="submit" data-testid="submit" disabled={isFetching}>Guardar</button>
            <button type="reset" data-testid="cancel" onClick={() => onCancel(false)}>Cancelar</button>
          </ButtonsForm>
        </GridForm>
      </form>
    </>
  )
}

export default Form
