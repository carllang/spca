import { useState } from 'react';
import orange from '@material-ui/core/colors/orange';
import deepOrange from '@material-ui/core/colors/deepOrange';
import indigo from '@material-ui/core/colors/indigo';
import { createMuiTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { lightBlue } from '@material-ui/core/colors';

export default function useTheme() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const defaultTheme = !!(prefersDarkMode || localStorage.getItem('isDarkTheme') === 'true');
  const [isDarkTheme, setIsDarkTheme] = useState(defaultTheme);
  const palletType = isDarkTheme ? 'dark' : 'light';
  const mainPrimaryColor = isDarkTheme ? orange[500] : '#05568d';
  const mainSecondaryColor = isDarkTheme ? deepOrange[900] : lightBlue[500];
  const theme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
      contrastThreshold: 3,
    },

  });

  return {
    theme,
    isDarkTheme,
    setIsDarkTheme,
  };
}
