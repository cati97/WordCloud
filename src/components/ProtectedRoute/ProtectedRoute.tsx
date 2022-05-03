import { Navigate, Outlet } from 'react-router-dom';
import { GameState } from 'store/store.types';
import * as URL from 'router/url';
import { connect } from 'react-redux';
import { User } from 'utils/types/User';

interface Props {
  user: User | null | undefined;
}

const ProtectedRoute = ({ user }: Props) => {
  if (!user) {
    return <Navigate to={URL.ROOT} />;
  }
  return <Outlet />;
};

const mapStateToProps = (state: GameState | undefined) => {
  return {
    user: state?.user,
  };
};

export default connect(mapStateToProps)(ProtectedRoute);
