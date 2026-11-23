'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material'
import { Open_Sans, ABeeZee } from 'next/font/google';


// create a type for your props
type ThemeContextProps = {
    darkMode: boolean,
    setDarkMode: (value: boolean) => void
}

const openSans = Open_Sans({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const abeezee = ABeeZee({ weight: ['400'] })


// create a context variable
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

// create a context provider
export function ThemeContextProvider(props: { children: ReactNode }) {
    const [darkMode, setDarkMode] = useState<boolean>(true)

    const theme = createTheme({
        typography: {
            fontFamily: abeezee.style.fontFamily,
        },
        palette: {
            mode: darkMode ? "dark" : "light",
            primary: {
                light: '#757ce8',
                main: '#3f50b5',
                dark: '#002884',
                contrastText: '#fff',
            },
            secondary: {
                light: '#ff7961',
                main: '#f44336',
                dark: '#ba000d',
                contrastText: '#000',
            },
        }
    });

    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {props.children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

// create a function to use the context
export function useThemeContext() {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useThemeContext must be used within a ThemeContextProvider')
    }
    return context
}