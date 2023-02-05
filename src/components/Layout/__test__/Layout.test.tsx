import { screen, render } from '@testing-library/react';
import axios from 'axios';
import Layout from '../Layout';

jest.mock('axios');

describe('LayoutComponent', () => {
  beforeEach(() => {
    render(<Layout />);
  });

  it('should render the component', () => {
    const wrapper = screen.getByText(/List Pokemons/);
    expect(wrapper).toBeInTheDocument();
  });
})
