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

export interface IFormValues {
  name: string;
  image: string;
  attack: number;
  defense: number;
  hp: number;
  type: string;
}
