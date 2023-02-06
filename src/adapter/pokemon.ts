import { IFormPokemon, Pokemon } from '../entities/Pokemon';

export const mapperPostDataPokemon = (data: IFormPokemon): Pokemon => ({
  name: data.name,
  image: data.image,
  attack: Number(data.attack),
  defense: Number(data.defense),
  hp: Number(data.hp),
  type: data.type,
  idAuthor: 1
})

export const mapperPutDataPokemon = (id: string, data: IFormPokemon): Pokemon => ({
  id: Number(id),
  name: data.name,
  image: data.image,
  attack: Number(data.attack),
  defense: Number(data.defense),
  hp: Number(data.hp),
  type: data.type,
  idAuthor: 1
})
