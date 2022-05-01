import styled from 'styled-components';
import { Typography } from '@mui/material';

interface WordBoxProps {
  color?: string;
  pointerCursor?: boolean;
}

export const Question = styled(Typography)`
  &:first-letter {
    text-transform: capitalize;
  }
`;

export const GameBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

export const WordsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border: 2px solid black;
  border-radius: 5px;
  height: 70%;
  width: 45vw;
  margin: 20px 0;
`;

export const WordBox = styled.div<WordBoxProps>`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 20px;
  padding: 20px;
  color: ${({ color }) => color};
  cursor: ${({ pointerCursor }) => (pointerCursor ? 'pointer' : 'auto')};
  & > :first-child {
    opacity: 70%;
  }
`;
