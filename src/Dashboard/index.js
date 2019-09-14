import React from "react";
import { Link, Route } from "react-router-dom";
import Navigation from "../Navigation";
import { MenuBox, UserInfoBox, ContentBox, ComponentBox, MyBody, ProfileColors, UserView, UserViewMenu, SideNav, UserViewContent, UserViewFormContainer,
  HeadingSecondary, FormUserData, FormGroup, FormGroupMaBtMd, FormGroupFormPhotoUpload, Image, FormInputUpload, FormUploadLabel, FormGroupRight, Button, SideNavLi, SideNavLiA, Icon, Label, Input, Line } from './styled';
  import SavedCities from "./savedCities";
  import Profile from "./profileSettings";
  import Specialist from "./citySpecialist";

const DashboardMenu = ({ match }) => {
  return (
     <div>
            <Navigation />
       <MyBody>
         <ProfileColors>
          <UserView>
            <UserViewMenu>
              <SideNav>
                <SideNavLi>
                  <SideNavLiA as="a" href="#"> <Icon><i class="far fa-user"></i></Icon> <Link to={`${match.url}/Profile`}>Profile</Link>
                  </SideNavLiA>
                  <SideNavLiA as="a" href="#"> <Icon><i class="far fa-user"></i></Icon> <Link to={`${match.url}/SavedCities`}>Saved Cities</Link>
                  </SideNavLiA>
                  <SideNavLiA as="a" href="#"> <Icon><i class="far fa-user"></i></Icon> <Link to={`${match.url}/Specialist`}>Become a Specialist</Link>
                  </SideNavLiA>
                  <SideNavLiA as="a" href="#"> <Icon><i class="far fa-user"></i></Icon> <Link to={`${match.url}/Messages`}>Messages</Link>
                  </SideNavLiA>
                </SideNavLi>
              </SideNav>
          </UserViewMenu>
          <UserViewContent>
              <UserViewFormContainer>
        <Route path={`${match.path}/:optionId`} component={Option} />
        <Route
          exact
          path={match.path}
          render={() => <h3>Please select an option.</h3>}
        />
                </UserViewFormContainer>
              </UserViewContent>
            </UserView>
        </ProfileColors>
       </MyBody>
    </div>
  );
};

function Option({ match }) {
  let comp;

  switch (match.params.optionId) {
    case "Profile":
      comp = <Profile />;
      break;
    case "SavedCities":
      comp = <SavedCities />;
      break;
    case "Specialist":
      comp = <Specialist />;
      break;
    default:
      comp = <div>Choose an option</div>;
  }
  return <ComponentBox>{comp}</ComponentBox>;
}

export default DashboardMenu;
