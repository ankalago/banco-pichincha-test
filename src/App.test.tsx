import { screen, render } from '@testing-library/react';
import axios from 'axios';
import App from './App';

jest.mock('axios');

describe('AppComponent', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('should render the component', () => {
    const wrapper = screen.getByText(/List Pokemons/);
    expect(wrapper).toBeInTheDocument();
  });
})
