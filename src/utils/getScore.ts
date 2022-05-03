import { Question } from './types/Question';

export const getScore = (question: Question, selectedWords: string[]) => {
  const selectedGoodWordsLen = selectedWords.filter((word) =>
    question.good_words.includes(word)
  ).length;

  const selectedBadWordsLen = selectedWords.filter(
    (word) => !question.good_words.includes(word)
  ).length;

  const notSelecteGoodWordsLen =
    question.good_words.length - selectedGoodWordsLen;

  return (
    selectedGoodWordsLen * 2 - (selectedBadWordsLen + notSelecteGoodWordsLen)
  );
};
