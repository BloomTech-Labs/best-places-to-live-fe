import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import Navigation from '../Navigation';
import {
  ComponentBox,
  MyBody,
  Main,
  UserView,
  UserViewMenu,
  SideNav,
  UserViewContent,
  UserViewFormContainer,
  SideNavLi,
  SideNavLiA,
  Icon
} from './styled';
import SavedCities from './savedCities';
import Profile from './profileSettings';
import Specialist from './citySpecialist';

const DashboardMenu = ({ match }) => {
  const [user, setUser] = useState('Richard');

  return (
    <div>
      <Navigation />
      <MyBody>
        <Main>
          <UserView>
            <UserViewMenu>
              <SideNav>
                <SideNavLi>
                  <SideNavLiA as='a' href='#'>
                    {' '}
                    <Icon>
                      <i class='far fa-user'></i>
                    </Icon>{' '}
                    <Link to={`${match.url}/Profile`}>Profile</Link>
                  </SideNavLiA>
                  <SideNavLiA as='a' href='#'>
                    {' '}
                    <Icon>
                      <i class='far fa-star'></i>
                    </Icon>{' '}
                    <Link to={`${match.url}/SavedCities`}>Saved Cities</Link>
                  </SideNavLiA>
                  <SideNavLiA as='a' href='#'>
                    {' '}
                    <Icon>
                      <i class='far fa-comment-alt'></i>
                    </Icon>{' '}
                    <Link to={`${match.url}/Specialist`}>
                      Become a Specialist
                    </Link>
                  </SideNavLiA>
                  <SideNavLiA as='a' href='#'>
                    {' '}
                    <Icon>
                      <i class='fas fa-city'></i>
                    </Icon>
                    <Link to={`${match.url}/Messages`}>Messages</Link>
                  </SideNavLiA>
                </SideNavLi>
              </SideNav>
            </UserViewMenu>
            <UserViewContent>
              <Route path={`${match.path}/:optionId`} component={Option} />
              <Route
                exact
                path={match.path}
                render={() => (
                  <UserViewFormContainer>
                    <h3>Welcome {user}</h3>
                  </UserViewFormContainer>
                )}
              />
            </UserViewContent>
          </UserView>
        </Main>
      </MyBody>
    </div>
  );
};

function Option({ match }) {
  let comp;

  switch (match.params.optionId) {
    case 'Profile':
      comp = <Profile />;
      break;
    case 'SavedCities':
      comp = <SavedCities />;
      break;
    case 'Specialist':
      comp = <Specialist />;
      break;
    default:
      comp = <div>Choose an option</div>;
  }
  return <ComponentBox>{comp}</ComponentBox>;
}

export default DashboardMenu;
