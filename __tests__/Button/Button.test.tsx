import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import { componentRenderer } from '../utils';
import { FlatButton, OutlineButton, SolidButton } from '../../src/components';
import { getBackgroundColor, getBorderStyling, getColor, getSize } from '../../src/components/Button/utils';
import { appTheme } from '../../src/constants/theme';

describe('Button Tests', () => {
  describe('Solid Button Tests', () => {
    it('should match snapshot', () => {
      const comp = renderer.create(componentRenderer(<SolidButton size="sm">hello</SolidButton>));
      expect(comp).toMatchSnapshot();
    });

    it('should render the given child component', () => {
      const { getByText } = render(
        componentRenderer(
          <SolidButton size="sm">
            <div>hello</div>
          </SolidButton>,
        ),
      );
      expect(getByText('hello')).toBeInTheDocument();
    });

    it('should invoke the given function on click', () => {
      const onClick = jest.fn();

      const { getByTestId } = render(
        componentRenderer(
          <SolidButton size="sm" onClick={onClick}>
            <div>hello</div>
          </SolidButton>,
        ),
      );
      fireEvent.click(getByTestId('button'));
      expect(onClick).toBeCalledTimes(1);
    });
  });

  describe('Flat Button Tests', () => {
    it('should match snapshot', () => {
      const comp = renderer.create(componentRenderer(<FlatButton size="sm">hello</FlatButton>));
      expect(comp).toMatchSnapshot();
    });
  });

  describe('Outline Button Tests', () => {
    it('should match snapshot', () => {
      const comp = renderer.create(componentRenderer(<OutlineButton size="sm">hello</OutlineButton>));
      expect(comp).toMatchSnapshot();
    });
  });

  describe('Utility Function Tests', () => {
    it('should return proper border styling', () => {
      const style = getBorderStyling(appTheme);
      expect(style).toEqual('2px solid #1EA4CE');
    });

    it('should return proper background styling', () => {
      let style = getBackgroundColor(appTheme, 'solid');
      expect(style).toEqual('#1EA4CE');
      style = getBackgroundColor(appTheme, 'flat');
      expect(style).toEqual('transparent');
      style = getBackgroundColor(appTheme, 'outline');
      expect(style).toEqual('transparent');
    });

    it('should return proper padding sizes', () => {
      let style = getSize('sm');
      expect(style).toEqual('6px 2px');
      style = getSize('md');
      expect(style).toEqual('16px 6px');
      style = getSize('lg');
      expect(style).toEqual('16px 24px');
    });

    it('should return proper color styling', () => {
      let style = getColor(appTheme, 'flat');
      expect(style).toEqual('#525252');
      style = getColor(appTheme, 'solid');
      expect(style).toEqual('#FFFFFF');
      style = getColor(appTheme, 'outline');
      expect(style).toEqual('#1EA4CE');
    });
  });
});
