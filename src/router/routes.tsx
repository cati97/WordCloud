import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from 'modules/Login';
import * as URL from './url';
import Game from 'modules/Game';
import Score from 'modules/Game/screens/Score';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={URL.ROOT} element={<Login />} />
        <Route path={URL.GAME} element={<Game />} />
        <Route path={URL.SCORE} element={<Score />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
