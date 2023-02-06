import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import Form from '../Form';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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
    }],
    isFetching: false
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
    },
    isFetching: false
  }),
}));

const queryClient = new QueryClient();

const defaultProps = {
  id: '8',
  onCancel: jest.fn()
}

const renderComponent = (props = defaultProps) =>
  render(
    <QueryClientProvider client={queryClient}>
      <Form {...defaultProps} {...props} />
    </QueryClientProvider>,
  );

describe('FormComponent', () => {

  it('should render the component', () => {
    renderComponent()
    const wrapper = screen.getByTestId(/form/);
    expect(wrapper).toBeInTheDocument();
  });

  it('should user click button submit without error', () => {
    renderComponent();

    const name = screen.getByTestId(/name/);
    fireEvent.input(name, { target: { value: "name" } });

    const image = screen.getByTestId(/image/);
    fireEvent.input(image, { target: { value: 'image' } });

    const hp = screen.getByTestId(/hp/);
    fireEvent.input(hp, { target: { value: 'hp' } });

    const type = screen.getByTestId(/type/);
    fireEvent.input(type, { target: { value: 'type' } });

    const attack = screen.getByTestId(/attack/);
    fireEvent.change(attack, { target: { value: 'attack' } });

    const defense = screen.getByTestId(/defense/);
    fireEvent.change(defense, { target: { value: 'defense' } });

    waitFor(() => {
      screen.getByTestId("submit");
      fireEvent.click(screen.getByTestId("submit"));
    })

    screen.getByTestId("cancel");
    fireEvent.click(screen.getByTestId("cancel"));
  });

  it('should render component without data', () => {
    renderComponent({ ...defaultProps, id: '9' });
  });

  it('should user view error', () => {
    renderComponent();
    fireEvent.click(screen.getByTestId("submit"));
  });

  it('should user add new pokemon', () => {
    renderComponent({ ...defaultProps, id: "" });

    const name = screen.getByTestId(/name/);
    fireEvent.input(name, { target: { value: "name" } });

    const image = screen.getByTestId(/image/);
    fireEvent.input(image, { target: { value: 'image' } });

    const hp = screen.getByTestId(/hp/);
    fireEvent.input(hp, { target: { value: 'hp' } });

    const type = screen.getByTestId(/type/);
    fireEvent.input(type, { target: { value: 'type' } });

    const attack = screen.getByTestId(/attack/);
    fireEvent.change(attack, { target: { value: 'attack' } });

    const defense = screen.getByTestId(/defense/);
    fireEvent.change(defense, { target: { value: 'defense' } });

    waitFor(() => {
      screen.getByTestId("submit");
      fireEvent.click(screen.getByTestId("submit"));
    })

    screen.getByTestId("cancel");
    fireEvent.click(screen.getByTestId("cancel"));
  });
})
