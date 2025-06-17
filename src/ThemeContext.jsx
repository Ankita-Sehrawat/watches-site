import { Button, createTheme, ThemeProvider as MuiThemeProvider, styled } from '@mui/material';
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create Theme Context
const ThemeContext = createContext();

// Styled Button Component
const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'customTheme',
})(({ customTheme, variant, theme }) => ({
  color: customTheme?.color || 'inherit',
  backgroundColor: customTheme?.backgroundColor ||
    (variant === 'contained' ? theme.palette.primary.main : 'transparent'),
  padding: customTheme?.padding || '8px 16px',
  margin: customTheme?.margin || '0',
  borderRadius: customTheme?.borderRadius || '4px',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: customTheme?.hoverColor || customTheme?.color || 'inherit',
    backgroundColor: customTheme?.hoverBackground ||
      (variant === 'contained' ? theme.palette.primary.dark : theme.palette.action.hover),
  },
}));

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(() => {
    const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    return savedTheme || 'light';
  });

  const [buttonTheme, setButtonTheme] = useState({
    primaryColor: '#1976d2',
    secondaryColor: '#dc004e',
    padding: '8px 16px',
    borderRadius: '4px',
    hoverEffect: true
  });

  // Apply theme class to body
  useEffect(() => {
    document.body.className = themeMode;
    localStorage.setItem('theme', themeMode);
  }, [themeMode]);

  const toggleThemeMode = () => {
    setThemeMode(prev => prev === 'light' ? 'dark' : 'light');
  };

  const updateButtonTheme = (newTheme) => {
    setButtonTheme(prev => ({ ...prev, ...newTheme }));
  };

  // Create MUI theme
  const muiTheme = createTheme({
    palette: {
      mode: themeMode,
      primary: {
        main: buttonTheme.primaryColor,
      },
      secondary: {
        main: buttonTheme.secondaryColor,
      },
      background: {
        default: themeMode === 'light' ? '#ffffff' : '#121212',
        paper: themeMode === 'light' ? '#f5f5f5' : '#1e1e1e',
      },
      text: {
        primary: themeMode === 'light' ? '#333333' : '#f5f5f5',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            padding: buttonTheme.padding,
            borderRadius: buttonTheme.borderRadius,
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: buttonTheme.hoverEffect ? 'translateY(-2px)' : 'none',
              boxShadow: buttonTheme.hoverEffect ? '0 4px 8px rgba(0,0,0,0.1)' : 'none',
            },
          },
        },
      },
    },
  });

  // Custom Button Component
  const ThemedButton = ({ children, customTheme = {}, ...props }) => {
    return (
      <StyledButton 
        customTheme={customTheme} 
        {...props}
        sx={{
          px: 3,
          py: 1,
          ...props.sx
        }}
      >
        {children}
      </StyledButton>
    );
  };

  return (
    <ThemeContext.Provider value={{ 
      themeMode, 
      toggleThemeMode, 
      buttonTheme, 
      updateButtonTheme,
      ThemedButton
    }}>
      <MuiThemeProvider theme={muiTheme}>
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
    <div className="theme-selector">
      <Button 
        onClick={toggleThemeMode} 
        variant="contained" 
        color="primary"
        aria-label="Toggle theme"
      >
        {themeMode === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </Button>
    </div>
  );
};