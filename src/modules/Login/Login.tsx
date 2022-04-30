import { Button, Typography } from '@mui/material';
import TextInput from 'components/Inputs/TextInput';
import { FieldValues, useForm } from 'react-hook-form';
import * as S from './Login.css';

const Login = () => {
  const { control, handleSubmit } = useForm<FieldValues>({
    defaultValues: { nickname: '' },
  });

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
  };

  return (
    <S.Container>
      <S.LoginForm>
        <Typography variant='h3'>Wordcloud game</Typography>
        <TextInput
          control={control}
          name='nickname'
          placeholder='Enter your nickname here...'
          fullWidth
        />
        <Button variant='outlined' onClick={handleSubmit(onSubmit)}>
          Play
        </Button>
      </S.LoginForm>
    </S.Container>
  );
};

export default Login;
