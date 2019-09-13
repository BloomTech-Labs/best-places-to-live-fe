import React from "react";
import { Link, Route } from "react-router-dom";
import Navigation from "../Navigation";
import { MenuBox, UserInfoBox, ContentBox, ComponentBox} from "./styled";
import SavedCities from "./savedCities";
import Profile from "./profileSettings";
import Specialist from "./citySpecialist";

const DashboardMenu = ({ match }) => {
  return (
    <div>
      <Navigation />
      <UserInfoBox></UserInfoBox>
      <ContentBox>
        <MenuBox>
          <Link to={`${match.url}/Profile`}>Profile</Link>
          <Link to={`${match.url}/SavedCities`}>Saved Cities</Link>
          <Link to={`${match.url}/Specialist`}>Become a Specialist</Link>
          <Link to={`${match.url}/Messages`}>Messages</Link>
        </MenuBox>
        <Route path={`${match.path}/:optionId`} component={Option} />
        <Route
          exact
          path={match.path}
          render={() => <h3>Please select an option.</h3>}
        />
      </ContentBox>
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
