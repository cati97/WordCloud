import { Question } from './types/Question';

export const getRandomQuestion = (questions: Question[]) => {
  return questions[Math.floor(Math.random() * questions.length)];
};
