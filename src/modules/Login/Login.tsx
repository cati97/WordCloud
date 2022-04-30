import { Button, Typography } from '@mui/material';
import TextInput from 'components/Inputs/TextInput';
import { FieldValues, useForm } from 'react-hook-form';
import * as S from './Login.css';
import { login } from 'store/actions/index';
import { connect } from 'react-redux';
import { User } from 'utils/types/User';
import { UserAction, GameState } from 'store/store.types';
import { Dispatch } from 'redux';

interface Props {
  login: (data: User) => void;
}

const Login = ({ login }: Props) => {
  const { control, handleSubmit } = useForm<FieldValues>({
    defaultValues: { nickname: '' },
  });

  const onSubmit = async (data: FieldValues) => {
    const newUser = {
      nickname: data.nickname,
      score: 0,
    };
    login(newUser);
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

const mapDispatchToProps = (dispatch: Dispatch<UserAction>) => {
  return {
    login: (data: User) => dispatch(login(data)),
  };
};

export default connect(mapDispatchToProps)(Login);
