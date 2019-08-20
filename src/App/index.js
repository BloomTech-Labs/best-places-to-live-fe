import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
// import Data from './data'

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
