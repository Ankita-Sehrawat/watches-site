import { Button, createTheme, ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create Theme Context
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  // Apply theme class to body and save to localStorage
  useEffect(() => {
    document.body.className = themeMode;
    localStorage.setItem('theme', themeMode);
  }, [themeMode]);

  const toggleThemeMode = () => {
    setThemeMode(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Create MUI theme
  const muiTheme = createTheme({
    palette: {
      mode: themeMode,
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#dc004e',
      },
      background: {
        default: themeMode === 'light' ? '#ffffff' : '#121212',
        paper: themeMode === 'light' ? '#f5f5f5' : '#1e1e1e',
      },
      text: {
        primary: themeMode === 'light' ? '#333333' : '#f5f5f5',
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ themeMode, toggleThemeMode }}>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline /> {/* This helps apply the theme to the whole app */}
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeSelector = () => {
  const { themeMode, toggleThemeMode } = useTheme();

  return (
    <div className="theme-selector" style={{ position: 'fixed', top: 20, right: 50, zIndex: 1000 }}>
      <Button 
        onClick={toggleThemeMode} 
        variant="contained" 
        color="primary"
        aria-label="Toggle theme"
      >
        {themeMode === 'light' ? '🌙' : '☀️'}
      </Button>
    </div>
  );
};