import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import { appTheme } from 'constants/theme';
import GlobalStyles from 'lib/globalStyles';
import { store, persistor } from 'store';
import { Header } from 'layouts/AppLayout/Header';
import { Products } from 'layouts/AppLayout/Products';
import { Sidebar } from 'layouts/AppLayout/Sidebar';

const App: React.FC = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={appTheme}>
          <GlobalStyles />
          <Header />
          <Sidebar />
          <Products />
        </ThemeProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
