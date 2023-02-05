import { screen, render, fireEvent } from '@testing-library/react';
import Layout from '../Layout';
import { IFormValues } from '../../../entities/Pokemon';

const renderComponent = () =>
  render(
    <Layout />,
  );

jest.mock('react-hook-form', () => ({
  ...jest.requireActual<IFormValues>('react-hook-form'),
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
