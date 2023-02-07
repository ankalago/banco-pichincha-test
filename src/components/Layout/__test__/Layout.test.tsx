import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import Layout from '../Layout';
import { IFormPokemon } from '../../../entities/Pokemon';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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
jest.mock('../../../hook/useMutationData', () => ({
  useMutationRemoveDataPokemon: () => ({
    mutate: jest.fn()
  }),
  useMutationUpdateDataPokemon: () => ({
    mutate: jest.fn()
  }),
  useMutationInsertDataPokemon: () => ({
    mutate: jest.fn()
  }),
}));

const queryClient = new QueryClient();

const renderComponent = () =>
  render(
    <QueryClientProvider client={queryClient}>
      <Layout />
    </QueryClientProvider>,
  );

jest.mock('react-hook-form', () => ({
  ...jest.requireActual<IFormPokemon>('react-hook-form'),
  Controller: () => <></>,
  useForm: () => ({
    control: () => ({}),
    handleSubmit: () => jest.fn(),
    register: () => jest.fn(),
    formState: () => ({}),
    setValue: () => jest.fn()
  }),
}));

describe('LayoutComponent', () => {

  it('should render the component', () => {
    const { container } = renderComponent();
    const wrapper = screen.getByText(/List Pokemons/);
    expect(wrapper).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should user click button edit pokemon', () => {
    renderComponent();
    fireEvent.click(screen.getByTestId("item-edit"));
  });

  it('should user click button remove pokemon', () => {
    renderComponent();
    fireEvent.click(screen.getByTestId("item-remove"));
  });

  it('should user click button new pokemon', () => {
    renderComponent();
    fireEvent.click(screen.getByTestId("new"));
  });

  it('should user search text', () => {
    renderComponent();
    const search = screen.getByTestId(/search/);
    waitFor(() => {
      fireEvent.input(search, { target: { value: "search" } });
    })
  });

})
