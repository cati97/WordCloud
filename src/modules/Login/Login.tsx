import { Typography } from '@mui/material';
import TextInput from 'components/Inputs/TextInput';
import { useForm } from 'react-hook-form';
import { login } from 'store/actions/index';
import { connect } from 'react-redux';
import { User } from 'utils/types/User';
import { UserAction } from 'store/store.types';
import { Dispatch } from 'redux';
import Container from 'components/Layout/Container';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import * as URL from 'router/url';
import FlexBox from 'components/Layout/FlexBox';
import OutlinedButton from 'components/Button/OutlinedButton';
import { LoginFormFields } from './Login.types';

interface Props {
  login: (data: User) => void;
}

const Login = ({ login }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormFields>({
    defaultValues: { nickname: '' },
    mode: 'onBlur',
  });

  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormFields) => {
    const newUser = {
      nickname: data.nickname,
      score: 0,
    };
    login(newUser);
    toast.success(`Welcome ${newUser.nickname}, let's play!`);
    navigate(URL.GAME);
    // TODO: connect with backend and add toast.error if nickname already exists
  };

  return (
    <Container>
      <FlexBox
        height='30vh'
        justifyContent='space-evenly'
        flexDirection='column'
      >
        <Typography variant='h3'>Wordcloud game</Typography>
        <TextInput
          name='nickname'
          control={control}
          errors={errors}
          placeholder='Enter your nickname here...'
          fullWidth
          isRequired
          minCharLength={4}
        />
        <OutlinedButton text='play' onClick={handleSubmit(onSubmit)} />
      </FlexBox>
    </Container>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<UserAction>) => {
  return {
    login: (data: User) => dispatch(login(data)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
