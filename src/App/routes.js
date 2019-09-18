import React from 'react';
import {Route} from 'react-router-dom';
import Home from '../Home';
import Login from '../Authorization/login';
import Register from '../Authorization/register';
import TopTen from "../TopTen";
import UserList from "../UserList"
import MapContainer from "../GoogleMap";
import DashboardMenu from '../Dashboard';
import CityDetail from '../CityDetail';
import Cities from '../Cities';


const Routes = () => {
  return (
    <>
      <Route exact path='/' component={Home} />
      <Route path='/Register' component={Register} />
      <Route path='/Login' component={Login} />
      <Route path='/Topten' component={TopTen} />
      <Route path='/Maps' component={GoogleMap} />
      <Route path='/CityDetail' component={CityDetail} />
      <Route path='/Userlist' render={props => <UserList {...props} />} />
      <Route path='/Dashboard' component={DashboardMenu} />
      {/* <Route path='/'  component={} />  */}
      <Route path='/Maps' component={MapContainer}/>
      {/* <Route path='/multi' component={MultiStepForm} /> */}
      <Route path='/Userlist'  render={props => <UserList {...props}/>} />
      <Route path='/Dashboard'  component={DashboardMenu} />
       <Route path='/Cities'  component={Cities} />
      {/* <Route path='/'  component={} />  */}
      {/* <Route path='/'  component={} />  */}
    </>
  );
};

export default Routes;
