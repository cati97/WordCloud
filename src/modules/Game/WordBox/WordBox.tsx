import { SetStateAction } from 'react';
import * as S from '../Game.css';

interface Props {
  word: string;
  setSelectedWords: (words: SetStateAction<string[]>) => void;
  isWordSelected: boolean;
}

const WordBox = ({ word, setSelectedWords, isWordSelected }: Props) => {
  const wordColor = isWordSelected ? 'gray' : 'black';
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
    <S.WordBox onClick={onWordClick} color={wordColor}>
      {word}
    </S.WordBox>
  );
};

export default WordBox;
