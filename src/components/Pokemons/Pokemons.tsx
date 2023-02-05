import React from 'react';
import { useQueryDataPokemons } from '../../hook/useQueryData';

type Props = {}

const Pokemons: React.FC<Props> = () => {
  const { data } = useQueryDataPokemons()

  return (
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
      {data?.map(pokemon => (
        <tr>
          <td>{pokemon.name}</td>
          <td>{pokemon.image}</td>
          <td>{pokemon.attack}</td>
          <td>{pokemon.defense}</td>
          <td>Actions</td>
        </tr>
      ))}
      </tbody>
    </table>
  )
}

export default Pokemons
