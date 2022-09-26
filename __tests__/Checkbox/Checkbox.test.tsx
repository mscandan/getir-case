import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import { componentRenderer } from '../utils';
import { Checkbox } from '../../src/components';

describe('Checkbox Tests', () => {
  it('should match snapshot with checked status false', () => {
    const comp = renderer.create(
      componentRenderer(<Checkbox isChecked={false} onChange={jest.fn()} label="label" count={3} />),
    );
    expect(comp).toMatchSnapshot();
  });

  it('should match snapshot with checked status true', () => {
    const comp = renderer.create(
      componentRenderer(componentRenderer(<Checkbox isChecked={false} onChange={jest.fn()} label="label" count={3} />)),
    );
    expect(comp).toMatchSnapshot();
  });

  it('should invoke the given function on change', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      componentRenderer(<Checkbox isChecked={false} onChange={onChange} label="label" count={3} />),
    );
    fireEvent.click(getByTestId('checkbox'));
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
