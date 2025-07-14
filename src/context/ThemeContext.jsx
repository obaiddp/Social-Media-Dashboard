import { createContext, useState } from "react"


export const ThemeContext =  createContext();

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
        <div className={ isDark ? 'dark': ''}>
            {children}
        </div>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider