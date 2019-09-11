import React from 'react';
import { Link } from "react-router-dom";
import Navigation from '../Navigation';


const DashboardMenu = () => {
  return (
    <div>
      <Navigation />
      <div className='menuBox'>
        <Link to='/Dashboard/Profile'>Profile</Link>
        <Link to='/Dashboard/SavedCities'>Saved Cities</Link>
        <Link to='/Dashboard/Specialist'>Become a Specialist</Link>
        <Link to='/Dashboard/Messages'>Messages</Link>
      </div>
    </div>
  )
}

export default DashboardMenu;