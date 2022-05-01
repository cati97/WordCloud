import Container from 'components/Layout/Container';
import { mockedQuestions } from 'data/mockedQuestions';
import { useMemo, useState } from 'react';
import * as S from './Game.css';
import { getRandomQuestion } from 'utils/getRandomQuestion';
import WordBox from './WordBox';
import { Button } from '@mui/material';

const Game = () => {
  const [selectedWords, setSelectedWords] = useState<string[]>([]);

  const randomQuestion = useMemo(() => {
    return getRandomQuestion(mockedQuestions);
  }, []);

  return (
    <Container>
      <S.GameBox>
        <S.Question variant='h4'> {randomQuestion.question} </S.Question>
        <S.WordsBox>
          {randomQuestion.all_words.map((word) => {
            const isWordSelected = selectedWords.includes(word);
            return (
              <WordBox
                key={word}
                word={word}
                setSelectedWords={setSelectedWords}
                isWordSelected={isWordSelected}
              />
            );
          })}
        </S.WordsBox>
        <Button variant='outlined' onClick={() => {}}>
          check answers
        </Button>
      </S.GameBox>
    </Container>
  );
};

export default Game;
