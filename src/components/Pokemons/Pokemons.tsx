import React from 'react';
import { useQueryDataPokemons } from '../../hook/useQueryData';
import editIcon from '../../assets/edit.svg'
import removeIcon from '../../assets/remove.svg'
import imageIcon from '../../assets/image.svg'
import { TablePokemon } from './styles';
import { PARAMS } from '../../constants';

type Props = {
  actionSelected: Function
  actionRemoved: Function
  filter: string
}

const Pokemons: React.FC<Props> = ({ actionSelected, actionRemoved, filter }) => {
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
      {data?.filter(item => item.name.toLowerCase().indexOf(filter) >= 0)?.map(pokemon => (
        <tr key={`${pokemon.name}-${pokemon.id}`}>
          <td><b>{pokemon.name}</b></td>
          <td>
            <img data-testid="image" src={imageIcon} height={32} alt="image" onClick={() => window.open(pokemon.image, 'image', PARAMS)} />
          </td>
          <td>{pokemon.attack}</td>
          <td>{pokemon.defense}</td>
          <td>
            <img data-testid="edit" src={editIcon} width={18} height={18} className="actions" alt="edit" onClick={() => actionSelected(pokemon.id)} />
            <img data-testid="remove" src={removeIcon} width={18} height={18} className="actions" alt="remove" onClick={() => actionRemoved(pokemon.id)} />
          </td>
        </tr>
      ))}
      </tbody>
    </TablePokemon>
  )
}

export default Pokemons
