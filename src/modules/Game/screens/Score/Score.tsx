import { Button, Typography } from '@mui/material';
import Container from 'components/Layout/Container';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { GameState } from 'store/store.types';
import { User } from 'utils/types/User';
import * as URL from 'router/url';
import FlexBox from 'components/Layout/FlexBox';

interface Props {
  user: User | null | undefined;
}

const Score = ({ user }: Props) => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate(URL.ROOT);
  };

  return (
    <Container>
      {user ? (
        <FlexBox
          height='30vh'
          justifyContent='space-evenly'
          flexDirection='column'
        >
          <Typography variant='h4'>
            Congratulations, {user.nickname}!
          </Typography>
          <Typography variant='h4'>Your score:</Typography>
          <Typography color='primary' variant='h4'>
            {user.score} points
          </Typography>
        </FlexBox>
      ) : (
        <FlexBox
          height='30vh'
          justifyContent='space-evenly'
          flexDirection='column'
        >
          <Typography variant='h4'>You are not logged in!</Typography>
          <Button variant='outlined' onClick={navigateHome}>
            Login
          </Button>
        </FlexBox>
      )}
    </Container>
  );
};

const mapStateToProps = (state: GameState | undefined) => {
  return {
    user: state?.user,
  };
};

export default connect(mapStateToProps)(Score);
