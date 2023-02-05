import { screen, render } from '@testing-library/react';
import Input from '../Input';

describe('InputComponent', () => {
  beforeEach(() => {
    render(<Input name="test" label="Test" />);
  });

  it('should render the component', () => {
    const wrapper = screen.getByText(/Test/);
    expect(wrapper).toBeInTheDocument();
  });
})
