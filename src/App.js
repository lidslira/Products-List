import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {ThemeProvider} from 'styled-components';

import Routes from './routes';
import themes from './themes';

const App = () => {
  return (
    <ThemeProvider theme={themes.light}>
      <PaperProvider>
        <Routes />
      </PaperProvider>
    </ThemeProvider>
  );
};

export default App;
