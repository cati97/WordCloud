import AppRoutes from 'router/routes';
import ToastProvider from 'components/ToastProvider';
import { ThemeProvider } from '@mui/material/styles';
import theme from './themes/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider />
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
