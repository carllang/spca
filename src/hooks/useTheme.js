import { useState } from 'react';
import orange from '@material-ui/core/colors/orange';
import deepOrange from '@material-ui/core/colors/deepOrange';
import lightBlue from '@material-ui/core/colors/lightBlue';
import deepPurple from '@material-ui/core/colors/deepPurple';
import { createMuiTheme } from '@material-ui/core/styles';

export default function useTheme() {

    const defaultTheme = localStorage.getItem('isDarkTheme') === 'true' ? true : false
    const [isDarkTheme, setIsDarkTheme] = useState(defaultTheme);
    const palletType = isDarkTheme ? "dark" : "light";
    const mainPrimaryColor = isDarkTheme ? orange[500] : lightBlue[500];
    const mainSecondaryColor = isDarkTheme ? deepOrange[900] : deepPurple[500];
    const theme = createMuiTheme({
        palette: {
            type: palletType,
            primary: {
                main: mainPrimaryColor
            },
            secondary: {
                main: mainSecondaryColor
            }
        }
    });

    return {
        theme,
        isDarkTheme,
        setIsDarkTheme
    }
}