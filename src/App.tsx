import React from 'react';
import { ThemeProvider } from 'styled-components';
import { appTheme } from 'constants/theme';
import GlobalStyles from 'lib/globalStyles';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
