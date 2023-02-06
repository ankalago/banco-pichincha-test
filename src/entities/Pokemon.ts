export type Pokemon = {
  id?: number
  name: string
  image: string
  attack: number
  defense: number
  hp: number
  type: string
  idAuthor: number
}

export interface IFormPokemon {
  name: string;
  image: string;
  attack: number;
  defense: number;
  hp: number;
  type: string;
}
