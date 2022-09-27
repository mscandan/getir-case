import React from 'react';
import { useSelector } from 'react-redux';
import GlobalStyles from 'lib/globalStyles';
import { ReduxStateType } from 'types';
import Home from 'pages/Home';
import { ThemeProvider } from 'styled-components';
import { appTheme } from 'constants/theme';

const App: React.FC = () => {
  const { isSidebarOpen } = useSelector((state: ReduxStateType) => state.sidebar);

  return (
    <ThemeProvider theme={appTheme}>
      <GlobalStyles isSidebarOpen={isSidebarOpen} />
      <Home />
    </ThemeProvider>
  );
};

export default App;
