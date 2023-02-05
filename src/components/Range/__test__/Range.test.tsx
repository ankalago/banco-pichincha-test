import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import Range from '../Range';

const renderComponent = () =>
  render(
    <Range name="test" label="Test" setValue={jest.fn()} />,
  );

describe('RangeComponent', () => {

  it('should render the component', () => {
    const { container } = renderComponent();
    const wrapper = screen.getByText(/Test/);
    expect(wrapper).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should user click range', () => {
    const { container } = renderComponent();
    const range = container.querySelector('input[type="range"]')!;
    waitFor(() => {
      fireEvent.change(range, { target: { value: 50 } });
    })
  });
})
