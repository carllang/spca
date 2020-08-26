import { indigo, lightBlue } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: indigo,
    secondary: lightBlue,
  },
});
export default theme;
