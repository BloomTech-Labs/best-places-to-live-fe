import React from 'react';
import {Router, withRouter} from 'react-router-dom';
import Routes from './routes';
import '../index.css';
// import Data from './data'
const createHistory = require('history').createBrowserHistory
const history = createHistory()
const AppWithRouter = withRouter(Routes)

const App = () => {
  return (
    <Router history={history}>
      <AppWithRouter />
    </Router>
  );
};

export default App;
