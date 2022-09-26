import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import { componentRenderer } from '../utils';
import { Counter } from '../../src/components';

describe('Counter Tests', () => {
  it('should match snapshot', () => {
    const comp = renderer.create(
      componentRenderer(<Counter name="name" price={0} itemCount={0} onCountChange={jest.fn()} />),
    );
    expect(comp).toMatchSnapshot();
  });

  it('should invoke given onCountChange function on pressing on minus icon', () => {
    const onChange = jest.fn();
    const { queryAllByRole } = render(
      componentRenderer(<Counter name="name" price={0} itemCount={10} onCountChange={onChange} />),
    );
    fireEvent.click(queryAllByRole('button')[0]);
    expect(onChange).toBeCalledTimes(1);
    expect(onChange).toBeCalledWith(9);
  });

  it('should invoke given onCountChange function on pressing on plus icon', () => {
    const onChange = jest.fn();
    const { queryAllByRole } = render(
      componentRenderer(<Counter name="name" price={0} itemCount={10} onCountChange={onChange} />),
    );
    fireEvent.click(queryAllByRole('button')[1]);
    expect(onChange).toBeCalledTimes(1);
    expect(onChange).toBeCalledWith(11);
  });
});
