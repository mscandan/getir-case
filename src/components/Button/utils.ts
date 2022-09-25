import { DefaultTheme } from 'styled-components';
import { ButtonSize, ButtonType } from 'types';

export const getBorderStyling = (theme: DefaultTheme) => {
  return `2px solid ${theme.COMPONENT_BG.BASE}`;
};

export const getFontSize = (size: ButtonSize) => {
  switch (size) {
    case 'md':
      return 13;
    case 'lg':
      return 14;
    default:
      return 12;
  }
};

export const getBackgroundColor = (theme: DefaultTheme, buttonType: ButtonType) => {
  switch (buttonType) {
    case 'solid':
      return theme.COMPONENT_BG.BASE;
    default:
      return 'transparent';
  }
};

export const getSize = (size: ButtonSize) => {
  switch (size) {
    case 'lg':
      return '16px 24px';
    case 'md':
      return '16px 6px';
    default:
      return '6px 2px';
  }
};

export const getColor = (theme: DefaultTheme, buttonType: ButtonType) => {
  switch (buttonType) {
    case 'solid':
      return theme.TEXT_LIGHT.HIGHLIGHT;
    case 'outline':
      return theme.COMPONENT_BG.BASE;
    default:
      return theme.TEXT_DARK.BASE;
  }
};
