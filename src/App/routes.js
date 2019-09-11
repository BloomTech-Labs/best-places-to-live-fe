import React from 'react';
import {Route} from 'react-router-dom';
import Home from '../Home';
import Login from '../Authorization/login';
import Register from '../Authorization/register';
import TopTen from "../TopTen";
import UserList from "../UserList"
import DashboardMenu from '../Dashboard';
import Profile from '../Dashboard/profileSettings';
import SavedCities from '../Dashboard/savedCities';
import Messages from '../Dashboard/Messages';

const Routes = () => {
  return (
    <>
      <Route exact path='/' component={Home} />
      <Route path='/Register' component={Register} />
      <Route path='/Login' component={Login} />
      <Route path='/Topten' component={TopTen} />
      <Route path='/Userlist'  render={props => <UserList {...props}/>} />
      <Route path='/Dashboard'  component={DashboardMenu} /> 
      <Route path='/Dashboard/Profile'  component={Profile} /> 
      <Route path='/Dashboard/SavedCities'  component={SavedCities} />
      <Route path='/Dashboard/Messages'  component={Messages} /> 
      {/* <Route path='/multi' component={MultiStepForm} /> */}
      {/* <Route path='/'  component={} />  */}
      {/* <Route path='/'  component={} />  */}
      {/* <Route path='/'  component={} />  */}
    </>
  );
};

export default Routes;
