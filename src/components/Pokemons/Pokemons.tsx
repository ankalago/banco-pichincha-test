import React from 'react';
import { useQueryDataPokemons } from '../../hook/useQueryData';
import editIcon from '../../assets/edit.svg'
import removeIcon from '../../assets/remove.svg'
import imageIcon from '../../assets/image.svg'
import { TablePokemon } from './styles';
import { PARAMS } from '../../constants';

type Props = {
  pokemonSelected: Function
  pokemonRemoved: Function
}

const Pokemons: React.FC<Props> = ({ pokemonSelected, pokemonRemoved }) => {
  const { data } = useQueryDataPokemons()

  return (
    <TablePokemon>
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
        <tr key={pokemon.name}>
          <td><b>{pokemon.name}</b></td>
          <td>
            <img data-testid="image" src={imageIcon} height={32} alt="image" onClick={() => window.open(pokemon.image, 'image', PARAMS)} />
          </td>
          <td>{pokemon.attack}</td>
          <td>{pokemon.defense}</td>
          <td>
            <img data-testid="edit" src={editIcon} width={18} height={18} className="actions" alt="edit" onClick={() => pokemonSelected(pokemon.id)} />
            <img data-testid="remove" src={removeIcon} width={18} height={18} className="actions" alt="remove" onClick={() => pokemonRemoved(pokemon.id)} />
          </td>
        </tr>
      ))}
      </tbody>
    </TablePokemon>
  )
}

export default Pokemons
