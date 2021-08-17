import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import {ThemeProvider} from 'styled-components';

import {store} from '~/store';
import Routes from './routes';
import themes from './themes';

const App = () => {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={themes.light}>
        <PaperProvider>
          <Routes />
        </PaperProvider>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
