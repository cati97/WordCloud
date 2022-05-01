import { Question } from './types/Question';

export const evaluateWord = (question: Question, answer: string) => {
  return question.good_words.includes(answer);
};
