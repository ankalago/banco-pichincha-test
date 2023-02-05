import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { screen, render, fireEvent } from '@testing-library/react';
import Pokemons from '../Pokemons';

jest.mock('axios');
jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
}));
jest.mock('../../../hook/useQueryData', () => ({
  useQueryDataPokemons: () => ({
    data: [{
      id: 8,
      name: "Alakazam",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/065.png",
      attack: 79,
      defense: 61,
      hp: 55,
      type: "Eléctrico",
      idAuthor: 1
    }]
  }),
  useQueryDataPokemon: () => ({
    data: {
      id: 8,
      name: "Alakazam",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/065.png",
      attack: 79,
      defense: 61,
      hp: 55,
      type: "Eléctrico",
      idAuthor: 1
    }
  }),
}));

const queryClient = new QueryClient();

describe('PokemonsComponent', () => {
  beforeEach(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <Pokemons pokemonRemoved={jest.fn()} pokemonSelected={jest.fn()} />
      </QueryClientProvider>
    );
  });

  it('should render the component', () => {
    const wrapper = screen.getByText(/Name/);
    expect(wrapper).toBeInTheDocument();
  });

  it('should user click image icon pokemon', () => {
    fireEvent.click(screen.getByTestId("image"));
  });
})
