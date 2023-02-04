import { screen, render } from '@testing-library/react';
import axios from 'axios';
import Wrapper from '../Wrapper';

jest.mock('axios');

describe('WapperComponent', () => {
  beforeEach(() => {
    render(<Wrapper />);
  });

  it('should render the component', () => {
    const wrapper = screen.getByText(/Hello World!/);
    expect(wrapper).toBeInTheDocument();
  });
})
