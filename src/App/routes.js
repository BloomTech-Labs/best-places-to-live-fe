import React from 'react';
import {Route} from 'react-router-dom';
import Home from '../Home';
import TopTen from "../TopTen";

const Routes = () => {
  return (
    <>
      <Route exact path='/' component={Home} />
      <Route path='/Topten' component={TopTen} />
      {/* <Route path='/multi' component={MultiStepForm} /> */}
      {/* <Route path='/'  component={} />  */}
      {/* <Route path='/'  component={} />  */}
      {/* <Route path='/'  component={} />  */}
      {/* <Route path='/'  component={} />  */}
    </>
  );
};

export default Routes;
