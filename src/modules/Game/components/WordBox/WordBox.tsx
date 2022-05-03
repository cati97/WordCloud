import { SetStateAction, useCallback, useMemo } from 'react';
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
  const wordColor = useMemo(() => {
    return getWordColor(isWordSelected);
  }, [isWordSelected]);

  const { msg: resultMsg, color: resultColor } = useMemo(() => {
    return getResult(isWordCorrect);
  }, [isWordCorrect]);

  const onWordClick = useCallback(() => {
    setSelectedWords((prev) => {
      if (!isWordSelected) {
        return [...prev, word];
      } else {
        return prev.filter((w) => w !== word);
      }
    });
  }, [isWordSelected, setSelectedWords, word]);

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
