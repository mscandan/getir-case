import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import { componentRenderer } from '../utils';
import { Input } from '../../src/components';

describe('Input Tests', () => {
  it('should match snapshot without value', () => {
    const comp = renderer.create(componentRenderer(<Input onChange={jest.fn()} placeholder="placeholder" value="" />));
    expect(comp).toMatchSnapshot();
  });

  it('should match snapshot with value', () => {
    const comp = renderer.create(
      componentRenderer(<Input onChange={jest.fn()} placeholder="placeholder" value="value" />),
    );
    expect(comp).toMatchSnapshot();
  });

  it('should render given placeholder if there value is undefined', () => {
    const { getByTestId } = render(
      componentRenderer(<Input onChange={jest.fn()} placeholder="placeholder" value="" />),
    );
    expect(getByTestId('input').getAttribute('value')).toEqual('');
  });

  it('should render given value if value is not undefined', () => {
    const { getByTestId } = render(
      componentRenderer(<Input onChange={jest.fn()} placeholder="placeholder" value="value" />),
    );
    expect(getByTestId('input').getAttribute('value')).toEqual('value');
  });

  it('should trigger given onChange function on change', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      componentRenderer(<Input onChange={onChange} placeholder="placeholder" value="value" />),
    );
    fireEvent.change(getByTestId('input'), { target: { value: 'changed' } });
    expect(onChange).toBeCalledTimes(1);
  });
});
