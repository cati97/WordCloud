import theme from 'themes/theme';

export const getWordColor = (isWordSelected: boolean) => {
  return isWordSelected
    ? theme.palette.primary.light
    : theme.palette.primary.main;
};

export const getResult = (isWordCorrect: boolean) => {
  return isWordCorrect
    ? {
        msg: 'Good',
        color: theme.palette.success.main,
      }
    : {
        msg: 'Bad',
        color: theme.palette.error.main,
      };
};
