import React from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Routes from './routes';
import store from './reducers/root';
import './App.scss';
import ThemeContext from './theme/themeContext';
import useTheme from './hooks/useTheme';

function App() {
  const { theme, isDarkTheme, setIsDarkTheme } = useTheme();
  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Provider store={store}>
          <div className="App">
            <Routes />
          </div>
        </Provider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
