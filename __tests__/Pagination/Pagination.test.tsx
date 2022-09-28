import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import { componentRenderer } from '../utils';
import { Pagination } from '../../src/components';

describe('Pagination Tests', () => {
  it('should match snapshot', () => {
    const comp = renderer.create(
      componentRenderer(<Pagination pageCount={10} selectedPageIndex={0} onSelectedPageIndexChange={jest.fn()} />),
    );
    expect(comp).toMatchSnapshot();
  });

  it('should trigger given onChange function on page number click', () => {
    const onChange = jest.fn();
    const { queryAllByRole } = render(
      componentRenderer(<Pagination pageCount={10} selectedPageIndex={0} onSelectedPageIndexChange={onChange} />),
    );
    const buttons = queryAllByRole('button');
    expect(buttons.length).toEqual(9);
    fireEvent.click(buttons[4]);
    expect(onChange).toBeCalledTimes(1);
    expect(onChange).toBeCalledWith(3);
  });
});
