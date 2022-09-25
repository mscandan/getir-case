import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import { componentRenderer } from '../utils';
import { Radio } from '../../src/components';

describe('Radio Button Tests', () => {
  it('should match the snapshot with the unchecked radio button', () => {
    const comp = renderer.create(componentRenderer(<Radio id="radio" isSelected={false} onChange={jest.fn()} />));

    expect(comp).toMatchSnapshot();
  });

  it('should match the snapshot with the checked radio button', () => {
    const comp = renderer.create(componentRenderer(<Radio id="radio" isSelected onChange={jest.fn()} />));

    expect(comp).toMatchSnapshot();
  });

  it('should invoke the given function on click', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      componentRenderer(
        <div>
          <Radio id="1" isSelected onChange={onChange} />
          <Radio id="2" isSelected={false} onChange={onChange} />
          <Radio id="3" isSelected={false} onChange={onChange} />
          <Radio id="4" isSelected={false} onChange={onChange} />
        </div>,
      ),
    );

    const radioEl = getByTestId('radio-2');
    fireEvent.click(radioEl);

    expect(onChange).toBeCalledTimes(1);
  });
});
