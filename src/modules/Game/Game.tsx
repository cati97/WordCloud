import Container from 'components/Layout/Container';
import { mockedQuestions } from 'data/mockedQuestions';
import { useMemo, useState } from 'react';
import * as S from './Game.css';
import { getRandomQuestion } from 'utils/getRandomQuestion';
import WordBox from './components/WordBox';
import { evaluateWord } from 'utils/evaluateWord';
import { getScore } from 'utils/getScore';
import { Dispatch } from 'redux';
import { UserAction, GameState } from 'store/store.types';
import { updateUserScore } from 'store/actions';
import { connect } from 'react-redux';
import { User } from 'utils/types/User';
import * as URL from 'router/url';
import { useNavigate } from 'react-router';
import OutlinedButton from 'components/Button/OutlinedButton';

interface Props {
  updateUserScore: (data: User) => void;
  user: User | null | undefined;
}

const Game = ({ updateUserScore, user }: Props) => {
  const [showAnswers, setShowAnswers] = useState(false);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);

  const navigate = useNavigate();

  const randomQuestion = useMemo(() => {
    return getRandomQuestion(mockedQuestions);
  }, []);

  const checkAnswers = () => {
    setShowAnswers(true);
    const score = getScore(randomQuestion, selectedWords);
    if (user) {
      const updatedUser = {
        ...user,
        score: score,
      };
      updateUserScore(updatedUser);
    }
  };

  const finishGame = () => {
    navigate(URL.SCORE);
  };

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
          <OutlinedButton text='finish game' onClick={finishGame} />
        ) : (
          <OutlinedButton text='check answers' onClick={checkAnswers} />
        )}
      </S.GameBox>
    </Container>
  );
};

const mapStateToProps = (state: GameState | undefined) => {
  return {
    user: state?.user,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<UserAction>) => {
  return {
    updateUserScore: (data: User) => dispatch(updateUserScore(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
