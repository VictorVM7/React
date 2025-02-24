import { useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css'
import Header from './components/Header'
import SubHeader from './components/SubHeader';
import DarkTheme from './theme/darkTheme';
import LightTheme from './theme/lightTheme';

export default function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
      <CssBaseline />
      <Header isDarkMode={isDarkMode} toggleTheme={() => setIsDarkMode(!isDarkMode)} />
      <SubHeader />
    </ThemeProvider>
  );
}
