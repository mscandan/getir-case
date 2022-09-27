import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import { componentRenderer } from '../utils';
import { Dropdown } from '../../src/components';

describe('Dropdown Tests', () => {
  it('should match snapshot', () => {
    const comp = renderer.create(componentRenderer(<Dropdown content={<div>this is content</div>}>hello</Dropdown>));
    expect(comp).toMatchSnapshot();
  });

  it('should not render content without clicking', () => {
    const { getByTestId } = render(componentRenderer(<Dropdown content={<div>this is content</div>}>hello</Dropdown>));
    expect(getByTestId('dropdown')).toHaveStyle({ display: 'none' });
  });

  it('should render content when clicking', () => {
    const { getByText } = render(componentRenderer(<Dropdown content={<div>this is content</div>}>hello</Dropdown>));
    fireEvent.click(getByText('hello'));
    expect(getByText('this is content')).toBeInTheDocument();
  });
});
