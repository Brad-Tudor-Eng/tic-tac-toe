import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Welcome from './Welcome';
import Play from './Play';
import HistoryList from './HistoryList';
import HistoricalGame from './HistoricalGame';

const AppRoutes = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/play" component={Play} />
      <Route exact path="/history" component={HistoryList} />
      <Route exact path="/history/:gameId" component={HistoricalGame} />
    </div>
  </BrowserRouter>
);

export default AppRoutes;
