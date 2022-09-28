import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import { componentRenderer } from '../utils';
import { Radios } from '../../src/components';

const RadioItems = [
  { id: '0', label: 'item 1' },
  { id: '1', label: 'item 2' },
  { id: '2', label: 'item 3' },
  { id: '3', label: 'item 4' },
];

describe('Radio Button Tests', () => {
  it('should match the snapshot with the unchecked radio button', () => {
    const comp = renderer.create(
      componentRenderer(<Radios data={RadioItems} onSelectedRadioChange={jest.fn()} selectedOptionId="0" />),
    );

    expect(comp).toMatchSnapshot();
  });

  it('should invoke the given function on click', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      componentRenderer(<Radios data={RadioItems} onSelectedRadioChange={onChange} selectedOptionId="0" />),
    );

    const radioEl = getByTestId('radio-2');
    fireEvent.click(radioEl);

    expect(onChange).toBeCalledTimes(1);
  });
});
