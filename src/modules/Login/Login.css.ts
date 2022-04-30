import styled from 'styled-components';
import { Paper } from '@mui/material';

export const Container = styled(Paper)`
  height: 70vh;
  margin: 5%;
  padding: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LoginForm = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  height: 30vh;
`;
