import React, { useEffect } from 'react';
import "./assets/styles/reset.css";
import "./assets/styles/App.styles.scss";
import { theme } from './assets/styles/theme'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route } from 'react-router-dom'; 
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import { useDispatch} from 'react-redux'
import { fetchData } from './action-creators/fetchData';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const localUrl = 'http://localhost:3000/user';
      dispatch(fetchData(localUrl));
  }, [])
  
  return (
    <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="App">
            <Route component={LoginPage} path="/learn-ts-mui-redux/" exact />
            <Route component={ProfilePage} path="/learn-ts-mui-redux/profile" exact />
          </div>
        </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
