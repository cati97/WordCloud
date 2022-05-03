import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from 'modules/Login';
import * as URL from './url';
import Game from 'modules/Game';
import Score from 'modules/Game/screens/Score';
import ProtectedRoute from 'components/ProtectedRoute';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={URL.ROOT} element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path={URL.GAME} element={<Game />} />
          <Route path={URL.SCORE} element={<Score />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
