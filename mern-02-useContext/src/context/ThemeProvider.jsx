import React, { Children, createContext, useState } from 'react'

// export const themeContext = React.createContext(null);
export const themeContext = createContext(null);

const ThemeProvider = (props) => {
    const [isDark, setIsDark] = useState(false);
    const toggleTheme = () => {
        setIsDark((prevTheme) => setIsDark(!prevTheme));
    }

  return (
      <themeContext.Provider value={{isDark, toggleTheme}} >
          {props.children}
      </themeContext.Provider>
  )
}

export default ThemeProvider