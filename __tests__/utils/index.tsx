import React from 'react';
import { ThemeProvider } from 'styled-components';
import { appTheme } from '../../src/constants/theme';

export const componentRenderer = (children: React.ReactNode) => {
  return <ThemeProvider theme={appTheme}>{children}</ThemeProvider>;
};
