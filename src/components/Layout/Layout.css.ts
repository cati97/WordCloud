import styled from 'styled-components';
import { Paper } from '@mui/material';

interface FlexBoxProps {
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  height: string;
}

export const Container = styled(Paper)`
  min-height: 70vh;
  margin: 5%;
  padding: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : 'center'};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'center')};
  flex-direction: ${({ flexDirection }) => flexDirection};
  height: ${({ height }) => height};
`;
