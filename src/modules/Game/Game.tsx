import Container from 'components/Layout/Container';
import { mockedQuestions } from 'data/mockedQuestions';
import { useMemo } from 'react';
import * as S from './Game.css';
import { getRandomQuestion } from 'utils/getRandomQuestion';

const Game = () => {
  const randomQuestion = useMemo(() => {
    return getRandomQuestion(mockedQuestions).question;
  }, []);

  return (
    <Container>
      <S.Question variant='h4'> {randomQuestion} </S.Question>
    </Container>
  );
};

export default Game;
