import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const getInitialTheme = () => {
    const storedTheme = localStorage.getItem('themeName')
    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme
    }

    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    return darkMediaQuery.matches ? 'dark' : 'light'
  }

  const [themeName, setThemeName] = useState(getInitialTheme)

  useEffect(() => {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleThemeChange = (event) => {
      if (!localStorage.getItem('themeName')) {
        setThemeName(event.matches ? 'dark' : 'light')
      }
    }

    darkMediaQuery.addEventListener('change', handleThemeChange)
    return () => darkMediaQuery.removeEventListener('change', handleThemeChange)
  }, [])

  const toggleTheme = () => {
    const name = themeName === 'dark' ? 'light' : 'dark'
    localStorage.setItem('themeName', name)
    setThemeName(name)
  }

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ThemeProvider, ThemeContext }
