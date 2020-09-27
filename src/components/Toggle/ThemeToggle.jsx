import React from 'react';
import Switch from '@material-ui/core/Switch';
import ThemeContext from '../../theme/themeContext';

function ThemeToggle() {
  return (
    <ThemeContext.Consumer>
      {({ isDarkTheme, setIsDarkTheme }) => (
        <Switch
          checked={isDarkTheme}
          onChange={() => {
            setIsDarkTheme(!isDarkTheme);
            const current = localStorage.getItem('isDarkTheme');
            localStorage.setItem(
              'isDarkTheme',
              current === 'true' ? 'false' : 'true',
            );
          }}
        />
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeToggle;
