import { SetStateAction } from 'react';
import * as S from '../../Game.css';
import { getWordColor, getResult } from './utils';

interface Props {
  word: string;
  setSelectedWords: (words: SetStateAction<string[]>) => void;
  isWordSelected: boolean;
  showAnswers: boolean;
  isWordCorrect: boolean;
}

const WordBox = ({
  word,
  setSelectedWords,
  isWordSelected,
  showAnswers,
  isWordCorrect,
}: Props) => {
  const wordColor = getWordColor(isWordSelected);
  const { msg: resultMsg, color: resultColor } = getResult(isWordCorrect);
  const onWordClick = () => {
    setSelectedWords((prev) => {
      if (!isWordSelected) {
        return [...prev, word];
      } else {
        return prev.filter((w) => w !== word);
      }
    });
  };
  return (
    <>
      {showAnswers ? (
        isWordSelected ? (
          <S.WordBox color={resultColor}>
            <div>{resultMsg}</div>
            <div>{word}</div>
          </S.WordBox>
        ) : (
          <S.WordBox color={wordColor}>{word}</S.WordBox>
        )
      ) : (
        <S.WordBox onClick={onWordClick} color={wordColor} pointerCursor={true}>
          {word}
        </S.WordBox>
      )}
    </>
  );
};

export default WordBox;
