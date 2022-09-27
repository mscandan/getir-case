import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import { appTheme } from 'constants/theme';
import GlobalStyles from 'lib/globalStyles';
import { store, persistor } from 'store';

const App: React.FC = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={appTheme}>
          <GlobalStyles />
        </ThemeProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
