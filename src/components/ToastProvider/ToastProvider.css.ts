import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import 'react-toastify/dist/ReactToastify.min.css';
import theme from 'themes/theme';

export const Toast = styled(ToastContainer)`
  .Toastify__toast--error {
    background: ${theme.palette.error.main};
    color: ${theme.palette.common.black};
  }
  .Toastify__toast--success {
    background: ${theme.palette.success.main};
    color: ${theme.palette.common.black};
  }
  &.Toastify__toast-container {
    width: 400px;
  }
`;
