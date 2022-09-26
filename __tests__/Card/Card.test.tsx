import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { componentRenderer } from '../utils';
import { Card } from '../../src/components';

describe('Card Tests', () => {
  it('should match snapshot with small card', () => {
    const comp = renderer.create(
      componentRenderer(
        <Card size="sm" title="card title">
          child
        </Card>,
      ),
    );
    expect(comp).toMatchSnapshot();
  });

  it('should match snapshot with large card', () => {
    const comp = renderer.create(
      componentRenderer(
        <Card size="large" title="card title">
          child
        </Card>,
      ),
    );
    expect(comp).toMatchSnapshot();
  });

  it('should render given title in dom', () => {
    const { getByText } = render(
      componentRenderer(
        <Card size="large" title="card title">
          child
        </Card>,
      ),
    );
    expect(getByText('card title')).toBeInTheDocument();
  });

  it('should render given child in dom', () => {
    const { getByText } = render(
      componentRenderer(
        <Card size="large" title="card title">
          child
        </Card>,
      ),
    );
    expect(getByText('child')).toBeInTheDocument();
  });
});
