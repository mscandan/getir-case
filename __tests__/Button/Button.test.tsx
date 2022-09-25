import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import { componentRenderer } from '../utils';
import { FlatButton, OutlineButton, SolidButton } from '../../src/components';
import { getBackgroundColor, getBorderStyling, getColor, getSize } from '../../src/components/Button/utils';
import { appTheme } from '../../src/constants/theme';

describe('Button Tests', () => {
  describe('Solid Button Tests', () => {
    it('should match snapshot with small solid button', () => {
      const comp = renderer.create(componentRenderer(<SolidButton size="sm">hello</SolidButton>));
      expect(comp).toMatchSnapshot();
    });

    it('should match snapshot with medium solid button', () => {
      const comp = renderer.create(componentRenderer(<SolidButton size="md">hello</SolidButton>));
      expect(comp).toMatchSnapshot();
    });

    it('should match snapshot with large solid button', () => {
      const comp = renderer.create(componentRenderer(<SolidButton size="lg">hello</SolidButton>));
      expect(comp).toMatchSnapshot();
    });

    it('should render the given child component in solid button', () => {
      const { getByText } = render(
        componentRenderer(
          <SolidButton size="sm">
            <div>hello</div>
          </SolidButton>,
        ),
      );
      expect(getByText('hello')).toBeInTheDocument();
    });

    it('should invoke the given function on click in solid button', () => {
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
    it('should match snapshot with flat button', () => {
      const comp = renderer.create(componentRenderer(<FlatButton size="sm">hello</FlatButton>));
      expect(comp).toMatchSnapshot();
    });

    it('should match snapshot with medium flat button', () => {
      const comp = renderer.create(componentRenderer(<FlatButton size="md">hello</FlatButton>));
      expect(comp).toMatchSnapshot();
    });

    it('should match snapshot with large flat button', () => {
      const comp = renderer.create(componentRenderer(<FlatButton size="lg">hello</FlatButton>));
      expect(comp).toMatchSnapshot();
    });

    it('should render the given child component in flat button', () => {
      const { getByText } = render(
        componentRenderer(
          <FlatButton size="sm">
            <div>hello</div>
          </FlatButton>,
        ),
      );
      expect(getByText('hello')).toBeInTheDocument();
    });

    it('should invoke the given function on click in flat button', () => {
      const onClick = jest.fn();

      const { getByTestId } = render(
        componentRenderer(
          <FlatButton size="sm" onClick={onClick}>
            <div>hello</div>
          </FlatButton>,
        ),
      );
      fireEvent.click(getByTestId('button'));
      expect(onClick).toBeCalledTimes(1);
    });
  });

  describe('Outline Button Tests', () => {
    it('should match snapshot with outline button', () => {
      const comp = renderer.create(componentRenderer(<OutlineButton size="sm">hello</OutlineButton>));
      expect(comp).toMatchSnapshot();
    });

    it('should match snapshot with medium outline button', () => {
      const comp = renderer.create(componentRenderer(<FlatButton size="md">hello</FlatButton>));
      expect(comp).toMatchSnapshot();
    });

    it('should match snapshot with large outline button', () => {
      const comp = renderer.create(componentRenderer(<FlatButton size="lg">hello</FlatButton>));
      expect(comp).toMatchSnapshot();
    });

    it('should render the given child component in outline button', () => {
      const { getByText } = render(
        componentRenderer(
          <OutlineButton size="sm">
            <div>hello</div>
          </OutlineButton>,
        ),
      );
      expect(getByText('hello')).toBeInTheDocument();
    });

    it('should invoke the given function on click in outline button', () => {
      const onClick = jest.fn();

      const { getByTestId } = render(
        componentRenderer(
          <OutlineButton size="sm" onClick={onClick}>
            <div>hello</div>
          </OutlineButton>,
        ),
      );
      fireEvent.click(getByTestId('button'));
      expect(onClick).toBeCalledTimes(1);
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
