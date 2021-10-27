import React from 'react';
import "./reset.css";
import "./App.styles.scss";
import { createTheme } from '@mui/material/styles';
import { indigo} from '@mui/material/colors';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Route } from 'react-router-dom'; 
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';

const theme = createTheme({
  palette: {
    secondary: {
      main: indigo[500],
    },
    text: {
      primary: indigo[500],
    }
  }
});

const App: React.FC = () => {
  
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Route component={LoginPage} path="/learn-ts-mui-redux/" exact />
          <Route component={ProfilePage} path="/learn-ts-mui-redux/profile" exact />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
