import { useState } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { lightBlue } from '@material-ui/core/colors';
import ThemeService from '../theme/themeService';

export default function useTheme() {
  const themePreference = ThemeService.getTheme();
  const prefersDarkMode = useMediaQuery(
    '(prefers-color-scheme: dark)',
  );
  const defaultTheme = !!(
    prefersDarkMode || localStorage.getItem('isDarkTheme') === 'true'
  );
  const [isDarkTheme, setIsDarkTheme] = useState(defaultTheme);
  const palletType = isDarkTheme ? 'dark' : 'light';
  const mainPrimaryColor = isDarkTheme ? themePreference.dark.primary : themePreference.light.primary;
  const mainSecondaryColor = isDarkTheme ? themePreference.dark.primary : themePreference.dark.secondary;
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
