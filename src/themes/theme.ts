import { createTheme, ThemeOptions } from '@mui/material/styles';

const palette = {
  text: {
    black: '#0a0909',
  },
  primary: {
    main: '#0a0909',
    light: '#827f7f',
  },
  secondary: {
    main: '#1976d2',
  },
  error: {
    main: '#d11515',
    light: '#b83333',
  },
  success: {
    main: '#32a854',
    light: '#49ad65',
  },
};

const typography = {
  h3: {
    fontWeight: 'bold',
  },
  h4: {
    fontWeight: 'bold',
  },
};

const theme = createTheme({
  typography,
  palette,
} as ThemeOptions);

export default theme;
