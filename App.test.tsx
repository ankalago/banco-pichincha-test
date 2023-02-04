import { screen, render } from '@testing-library/react';
import axios from 'axios';
import App from './src/App';

jest.mock('axios');

describe('AppComponent', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('should render the component', () => {
    const wrapper = screen.getByText(/Hello World!/);
    expect(wrapper).toBeInTheDocument();
  });
})
