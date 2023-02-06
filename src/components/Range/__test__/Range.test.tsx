import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import Range, { PropsRange } from '../Range';

const defaultProp = {
  name: "test",
  label: "Test",
  setValue: jest.fn()
}

const renderComponent = (props: PropsRange = defaultProp) =>
  render(
    <Range {...defaultProp} {...props} />,
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

  it('should render range with value prop', () => {
    renderComponent({ ...defaultProp, value: 10 });
    const attack = screen.getByTestId(/test/);
    waitFor(() => {
      fireEvent.change(attack, { target: { value: 10 } });
    })
  });
})
