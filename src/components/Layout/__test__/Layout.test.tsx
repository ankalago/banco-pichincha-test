import { screen, render } from '@testing-library/react';
import Layout from '../Layout';
import { IFormValues } from '../../../entities/Pokemon';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const renderComponent = () =>
  render(
    <QueryClientProvider client={queryClient}>
      <Layout />
    </QueryClientProvider>,
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

})
