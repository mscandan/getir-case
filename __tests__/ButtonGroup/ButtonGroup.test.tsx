import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import { componentRenderer } from '../utils';
import { ButtonGroup } from '../../src/components';

const ButtonGroupData = [
  { id: '0', label: 'button 0' },
  { id: '1', label: 'button 1' },
  { id: '2', label: 'button 2' },
];

describe('Button Group Tests', () => {
  it('should match snapshot', () => {
    const comp = renderer.create(
      componentRenderer(<ButtonGroup data={ButtonGroupData} onSelectedButtonChange={jest.fn()} selectedButtonId="0" />),
    );
    expect(comp).toMatchSnapshot();
  });

  it('should render first button as selected', () => {
    const { getByText } = render(
      componentRenderer(<ButtonGroup data={ButtonGroupData} onSelectedButtonChange={jest.fn()} selectedButtonId="0" />),
    );
    const firstButton = getByText('button 0');
    const secondButton = getByText('button 1');
    expect(firstButton).toHaveStyle({ backgroundColor: '#1EA4CE' });
    expect(secondButton).not.toHaveStyle({ backgroundColor: '#1EA4CE' });
  });

  it('should trigger given function on clicking on unselected button', () => {
    const onChange = jest.fn();
    const { getByText } = render(
      componentRenderer(<ButtonGroup data={ButtonGroupData} onSelectedButtonChange={onChange} selectedButtonId="0" />),
    );
    const secondButton = getByText('button 1');
    fireEvent.click(secondButton);
    expect(onChange).toBeCalledTimes(1);
  });
});
