import React, { useState, useEffect } from 'react';
import Switch from '@mui/material/Switch';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function ModeSwitch() {
  // Retrieve the saved theme mode from localStorage, default to 'dark' if not set
  const savedTheme = localStorage.getItem('themeMode') || 'light';
  const [isLightMode, setIsLightMode] = useState(savedTheme === 'light');

  const toggleMode = () => {
    const newThemeMode = isLightMode ? 'dark' : 'light';
    setIsLightMode(!isLightMode);
    // Save the new theme mode to localStorage
    localStorage.setItem('themeMode', newThemeMode);
  };

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  useEffect(() => {
    // Apply theme changes on mount
    document.body.classList.toggle('dark-mode', !isLightMode);
    // Update local storage with theme mode
    localStorage.setItem('themeMode', isLightMode ? 'light' : 'dark');
  }, [isLightMode]);

  return (
    <ThemeProvider theme={isLightMode ? lightTheme : darkTheme}>
        <Switch
          size="medium"
          checked={isLightMode}
          onChange={toggleMode}
          color="primary"
          inputProps={{ 'aria-label': 'toggle light/dark mode' }}
        />
        {/*
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3 style={{ margin: 0, marginBottom: '8px' }}>{isLightMode ? 'Light' : 'Dark'} Mode</h3>*/}
        
    </ThemeProvider>
  );
}

export default ModeSwitch;
