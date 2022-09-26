import React from 'react';
import renderer from 'react-test-renderer';
import { componentRenderer } from '../utils';
import { Icon } from '../../src/components';

describe('Icon component tests', () => {
  it('should match snapshot with name=logo', () => {
    const comp = renderer.create(componentRenderer(<Icon name="logo" />));
    expect(comp).toMatchSnapshot();
  });
  it('should match snapshot with name=arrowLeft', () => {
    const comp = renderer.create(componentRenderer(<Icon name="arrowLeft" />));
    expect(comp).toMatchSnapshot();
  });
  it('should match snapshot with name=arrowRight', () => {
    const comp = renderer.create(componentRenderer(<Icon name="arrowRight" />));
    expect(comp).toMatchSnapshot();
  });
  it('should match snapshot with name=basket', () => {
    const comp = renderer.create(componentRenderer(<Icon name="basket" />));
    expect(comp).toMatchSnapshot();
  });
  it('should match snapshot with name=close', () => {
    const comp = renderer.create(componentRenderer(<Icon name="close" />));
    expect(comp).toMatchSnapshot();
  });
  it('should match snapshot with name=loading', () => {
    const comp = renderer.create(componentRenderer(<Icon name="loading" />));
    expect(comp).toMatchSnapshot();
  });
  it('should match snapshot with name=menu', () => {
    const comp = renderer.create(componentRenderer(<Icon name="menu" />));
    expect(comp).toMatchSnapshot();
  });
  it('should match snapshot with name=minus', () => {
    const comp = renderer.create(componentRenderer(<Icon name="minus" />));
    expect(comp).toMatchSnapshot();
  });
  it('should match snapshot with name=plus', () => {
    const comp = renderer.create(componentRenderer(<Icon name="plus" />));
    expect(comp).toMatchSnapshot();
  });
  it('should match snapshot with name=threeDots', () => {
    const comp = renderer.create(componentRenderer(<Icon name="threeDots" />));
    expect(comp).toMatchSnapshot();
  });
  it('should match snapshot with name=vector', () => {
    const comp = renderer.create(componentRenderer(<Icon name="vector" />));
    expect(comp).toMatchSnapshot();
  });
});
