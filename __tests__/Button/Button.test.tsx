import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import { componentRenderer } from '../utils';
import { Button } from '../../src/components';

describe('Button Tests', () => {
  it('should match snapshot', () => {
    const comp = renderer.create(componentRenderer(<Button>Hello</Button>));
    expect(comp).toMatchSnapshot();
  });

  it('should match snapshot', () => {
    const { getByText } = render(componentRenderer(<Button>Hello</Button>));
    expect(getByText('Hello')).toBeInTheDocument();
  });

  it('should trigger given onClick func on click', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(componentRenderer(<Button onClick={onClick}>Hello</Button>));
    const comp = getByTestId('button');
    fireEvent.click(comp);

    expect(onClick).toBeCalledTimes(1);
  });
});
