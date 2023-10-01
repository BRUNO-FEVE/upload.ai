import { PropsWithChildren, createContext, useState } from "react";

interface DefaultThemeProps {
    theme: boolean
    handleThemeChange: () => void
}

const DefaultTheme: DefaultThemeProps = {
    theme: false,
    handleThemeChange: () => {}
}

export const ThemeContext = createContext(DefaultTheme)

export default function ThemeProvider( {children}: PropsWithChildren ) {
    const [ theme, setTheme ] = useState(false)

    const handleThemeChange = () => {
        setTheme(prev => !prev)
      }

  return (
    <ThemeContext.Provider
        value={{
            theme,
            handleThemeChange
        }}
    >
        { children }
    </ThemeContext.Provider>
  )
}

