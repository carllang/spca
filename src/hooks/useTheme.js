import { useState } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { lightBlue, blue } from '@material-ui/core/colors';
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

  const primaryDark = themePreference.dark.primary || blue;
  const primaryLight = themePreference.light.primary || blue;
  const secondaryDark = themePreference.dark.secondary || lightBlue;
  const secondaryLight = themePreference.light.secondary || lightBlue;

  const mainPrimaryColor = isDarkTheme ? primaryDark : primaryLight;
  const mainSecondaryColor = isDarkTheme ? secondaryDark : secondaryLight;
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
