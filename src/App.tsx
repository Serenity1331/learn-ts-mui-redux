import React, { useEffect } from 'react';
import "./reset.css";
import "./App.styles.scss";
import { createTheme } from '@mui/material/styles';
import { indigo } from '@mui/material/colors';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Route } from 'react-router-dom'; 
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import { useDispatch} from 'react-redux'
import { fetchData } from './action-creators/fetchData';
import { postData } from './action-creators/postData';

const theme = createTheme({
  palette: {
    secondary: {
      main: indigo[500],
    },
    text: {
      primary: '#cacbd2',
    },
    mode: 'dark',
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: '#3f51b5',
        }
      }
    },
    MuiAppBar: {
      defaultProps: {
        enableColorOnDark: true,
      },
      styleOverrides: {
        root: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px',
          height: '60px',
          backgroundColor: '#0e114e'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    }
  },
});

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // const jsonplaceholderUrl = 'https://jsonplaceholder.typicode.com/users/1';
    const localUrl = 'http://localhost:3000/user';
      // dispatch(fetchData(localUrl))
      dispatch(postData(localUrl))
  }, [])
  
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
