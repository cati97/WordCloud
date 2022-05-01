import Container from 'components/Layout/Container';
import { mockedQuestions } from 'data/mockedQuestions';
import { useMemo, useState } from 'react';
import * as S from './Game.css';
import { getRandomQuestion } from 'utils/getRandomQuestion';
import WordBox from './WordBox';
import { Button } from '@mui/material';
import { evaluateWord } from 'utils/evaluateWord';

const Game = () => {
  const [showAnswers, setShowAnswers] = useState(false);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);

  const randomQuestion = useMemo(() => {
    return getRandomQuestion(mockedQuestions);
  }, []);

  const checkAnswers = () => {
    setShowAnswers(true);
  };

  const finishGame = () => {};

  return (
    <Container>
      <S.GameBox>
        <S.Question variant='h4'> {randomQuestion.question} </S.Question>
        <S.WordsBox>
          {randomQuestion.all_words.map((word) => {
            const isWordSelected = selectedWords.includes(word);
            const isWordCorrect = evaluateWord(randomQuestion, word);
            return (
              <WordBox
                key={word}
                word={word}
                setSelectedWords={setSelectedWords}
                isWordSelected={isWordSelected}
                showAnswers={showAnswers}
                isWordCorrect={isWordCorrect}
              />
            );
          })}
        </S.WordsBox>
        {showAnswers ? (
          <Button variant='outlined' onClick={finishGame}>
            finish game
          </Button>
        ) : (
          <Button variant='outlined' onClick={checkAnswers}>
            check answers
          </Button>
        )}
      </S.GameBox>
    </Container>
  );
};

export default Game;
