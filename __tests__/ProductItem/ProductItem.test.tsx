import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import { componentRenderer } from '../utils';
import { ProductItem } from '../../src/components';

describe('Product Item Tests', () => {
  it('should match snapshot', () => {
    const comp = renderer.create(
      componentRenderer(<ProductItem imageSource="" name="name" price={3} onAddButtonClick={jest.fn()} />),
    );
    expect(comp).toMatchSnapshot();
  });

  it('should trigger given onClick function on click', () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      componentRenderer(<ProductItem imageSource="" name="name" price={3} onAddButtonClick={onClick} />),
    );
    const addBtn = getByRole('button');
    fireEvent.click(addBtn);
    expect(onClick).toBeCalledTimes(1);
  });
});
