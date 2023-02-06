import { screen, render, fireEvent } from '@testing-library/react';
import Number from '../Number';

describe('InputComponent', () => {
  beforeEach(() => {
    render(<Number name="test" label="Test" setValue={jest.fn()} value={0} />);
  });

  it('should render the component', () => {
    const wrapper = screen.getByText(/Test/);
    expect(wrapper).toBeInTheDocument();
  });

  it('should user change the value', () => {
    const name = screen.getByTestId(/test/);
    fireEvent.change(name, { target: { value: "test" } });
  });
})
