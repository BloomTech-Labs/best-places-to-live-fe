import React from 'react';
import { Link } from "react-router-dom";
import Navigation from '../Navigation';
import { MenuBox, UserInfoBox, ContentBox } from "./styled";
import SavedCities from './savedCities';



const DashboardMenu = () => {
  return (
    <div>
      <Navigation />
      <UserInfoBox></UserInfoBox>
      <ContentBox>
        <MenuBox>
          <Link to='/Dashboard/Profile'>Profile</Link>
          <Link to='/Dashboard/SavedCities'>Saved Cities</Link>
          <Link to='/Dashboard/Specialist'>Become a Specialist</Link>
          <Link to='/Dashboard/Messages'>Messages</Link>
        </MenuBox>
        {/* <Profile/>
        <SavedCities/> */}
      </ContentBox>
    </div>
  )
}

export default DashboardMenu;