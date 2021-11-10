import { createTheme } from '@mui/material/styles';
import { indigo } from '@mui/material/colors';
import CrimeFighter from '../fonts/crimefighter-bb.regular.ttf';

const createFont = (fontName: string, fontWeight: number, fontUrl: string) => `
  @font-face {
    font-family: ${fontName};
    font-style: normal;
    font-display: swap;
    font-weight: ${fontWeight};
    src: local(${fontName}), url(${fontUrl}) format('opentype');
    unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
}`;

export const theme = createTheme({
    palette: {
      secondary: {
        main: indigo[500],
      },
      text: {
        primary: '#cacbd2',
      },
      mode: 'dark',
    },
    typography: {
      fontFamily: ['CrimeFighter'].join(','),
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
        ${createFont('CrimeFighter', 400, CrimeFighter)}
        `
      },
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