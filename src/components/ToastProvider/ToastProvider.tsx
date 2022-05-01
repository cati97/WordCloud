import * as S from './ToastProvider.css';

const ToastProvider = () => {
  return <S.Toast autoClose={5000} hideProgressBar />;
};

export default ToastProvider;
