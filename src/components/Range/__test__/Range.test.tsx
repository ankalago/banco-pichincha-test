import { screen, render } from '@testing-library/react';
import Range from '../Range';

describe('RangeComponent', () => {
  beforeEach(() => {
    render(<Range name="test" label="Test" />);
  });

  it('should render the component', () => {
    const wrapper = screen.getByText(/Test/);
    expect(wrapper).toBeInTheDocument();
  });
})
