import AppRoutes from 'router/routes';
import ToastProvider from 'components/ToastProvider';

const App = () => {
  return (
    <>
      <ToastProvider />
      <AppRoutes />
    </>
  );
};

export default App;
