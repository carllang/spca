import React from 'react';

const ThemeContext = React.createContext({
  theme: false,
  toggleTheme: () => { },
});

export default ThemeContext;
