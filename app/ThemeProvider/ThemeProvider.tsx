'use client';
import { NextUIProvider } from '@nextui-org/react';
const {nextui} = require("@nextui-org/react");

import { createContext, useContext, useEffect, useState } from 'react';
import { text } from 'stream/consumers';

const ThemeContext = createContext();

const lightTheme = {
    type: 'light',
    theme: {
        colors: {
        primary: '#0070f3',
        },
    },
    };

    const darkTheme = {
    type: 'dark',
    theme: {
        colors: {
        primary: '#1E2A3A',
        text: '#ffffff',
        },
    },
    };

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
          const storedTheme = localStorage.getItem('isDark');
          return storedTheme ? JSON.parse(storedTheme) : false; // 'false' par défaut pour le mode clair
        }
        return false;
      });
    
      useEffect(() => {
        // Enregistrer la valeur du thème dans le localStorage
        localStorage.setItem('isDark', JSON.stringify(isDark));
      }, [isDark]);
    
      const toggleDarkMode = () => {
       
        setIsDark((prev) => !prev);



      };
  
    return (
      <ThemeContext.Provider value={{ isDark, toggleDarkMode,darkTheme,lightTheme }}>
        <NextUIProvider theme={isDark ? darkTheme : lightTheme}>
          {children}
        </NextUIProvider>
      </ThemeContext.Provider>
    );
  };
export const useTheme = () => useContext(ThemeContext);



