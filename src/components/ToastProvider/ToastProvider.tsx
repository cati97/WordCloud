import * as S from './ToastProvider.css';
import { ReactNode } from 'react';

const ToastProvider = () => {
  return (
    <>
      <S.Toast autoClose={5000} hideProgressBar />
    </>
  );
};

export default ToastProvider;
