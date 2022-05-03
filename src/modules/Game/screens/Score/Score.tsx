import { Typography } from '@mui/material';
import Container from 'components/Layout/Container';
import { connect } from 'react-redux';
import { GameState } from 'store/store.types';
import { User } from 'utils/types/User';
import FlexBox from 'components/Layout/FlexBox';

interface Props {
  user: User | null | undefined;
}

const Score = ({ user }: Props) => {
  return (
    <Container>
      <FlexBox
        height='30vh'
        justifyContent='space-evenly'
        flexDirection='column'
      >
        <Typography variant='h4'>Congratulations, {user?.nickname}!</Typography>
        <Typography variant='h4'>Your score:</Typography>
        <Typography color='secondary' variant='h4'>
          {user?.score} points
        </Typography>
      </FlexBox>
    </Container>
  );
};

const mapStateToProps = (state: GameState | undefined) => {
  return {
    user: state?.user,
  };
};

export default connect(mapStateToProps)(Score);
