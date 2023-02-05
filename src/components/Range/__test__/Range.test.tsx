import { screen, render, fireEvent } from '@testing-library/react';
import Range from '../Range';

const renderComponent = () =>
  render(
    <Range name="test" label="Test" />,
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
    const slider = container.querySelector('input[type="range"]')!;
    fireEvent.change(slider, { target: { value: 50 } });
  });
})
