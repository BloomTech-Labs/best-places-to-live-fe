import React from 'react';
import {Route} from 'react-router-dom';
import Home from '../Home';
import Login from '../Authorization/login';
import Register from '../Authorization/register';
import TopTen from "../TopTen";

const Routes = () => {
  return (
    <>
      <Route exact path='/' component={Home} />
      <Route path='/Register' component={Register} />
      <Route path='/Login' component={Login} />
      <Route path='/Topten' component={TopTen} />
      {/* <Route path='/multi' component={MultiStepForm} /> */}
      <Route path='/Userlist'  render={props => <UserList {...props}/>} />
      {/* <Route path='/'  component={} />  */}
      {/* <Route path='/'  component={} />  */}
      {/* <Route path='/'  component={} />  */}
    </>
  );
};

export default Routes;
