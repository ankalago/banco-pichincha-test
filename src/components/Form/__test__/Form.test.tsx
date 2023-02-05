import { screen, render, fireEvent } from '@testing-library/react';
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
    }]
  }),
}));

const queryClient = new QueryClient();

const renderComponent = () =>
  render(
    <QueryClientProvider client={queryClient}>
      <Form />
    </QueryClientProvider>,
  );

describe('FormComponent', () => {

  it('should render the component', () => {
    renderComponent()
    const wrapper = screen.getByTestId(/form/);
    expect(wrapper).toBeInTheDocument();
  });

  it('should user click button submit', () => {
    renderComponent();

    const name = screen.getByTestId(/name/);
    fireEvent.input(name, { target: { value: "name" } });

    const image = screen.getByTestId(/image/);
    fireEvent.input(image, { target: { value: 'image' } });

    screen.getByTestId("submit");

    fireEvent.click(screen.getByTestId("submit"));
  });

  it('should user view error', () => {
    const { container } = renderComponent();

    container.querySelector('input[name="name"]');
    container.querySelector('input[name="image"]');
    fireEvent.click(screen.getByTestId("submit"));
  });
})
