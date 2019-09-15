import styled from 'styled-components';

// export const MasterDashBox = styled.div``; saving for Main div around DashboardMenu component

export const UserInfoBox = styled.div``;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const MenuBox = styled.div`
  height: 300px;
  width: 280px;
  border: 1px solid #092244;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  justify-content: space-around;
  align-items: flex-start;
  color: #1f252e;

  a {
    text-decoration: none;
    margin-left: 10%;
    color: #1f252e;
  }
`;

// for the component being rendered by the switch case
export const ComponentBox = styled.div`
  width: 50%;
  margin-left: 20%;
`;

// Profile option styling
export const ProfileBox = styled.div``;

export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  input {
    width: 100%;
    padding: 12px;
    border: 1px solid #092244;
    border-radius: 4px;
    margin: 5px 0;
    opacity: 0.85;
    display: inline-block;
    font-size: 17px;
    line-height: 20px;
    outline: none;
    text-decoration: none;
  }

  button {
    font-weight: 600;
    text-align: center;
    height: 46px;
    width: 100%;
    background-color: #22ce8b;
    border: 0px solid white;
    color: #ffffff;
    font-size: 1.5rem;
    border-radius: 4px;
    &:hover {
      background-color: white;
      color: #22ce8b;
      border: solid 3px #22ce8b;
    }
  }
`;

// Styling for SavedCities
export const SavedCitiesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 500px;
`;

export const CitiesTitle = styled.div`
  display: flex;
  justify-content: center;
`;

export const SavedCityCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: center;
`;

export const CityCard = styled.div`
  height: 20%;
  width: 35%;
  position: relative;
  margin-top: 2%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;

export const CardDetail = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.7);
  bottom: 0.01rem;
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  p {
    font-weight: 500;
    text-align: center;
  }
`;

export const MyBody = styled.body`
  font-size: 62.5%;
  line-height: 2.6;
  font-weight: 300;
  font-family: 'Lato', sans-serif;
  color: #777;
  padding: 3rem;
  min-height: 100vh;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
`;

export const Main = styled.main`
  padding: 8rem 6rem
  background-color: #f7f7f7;
  -webkit-box-flex: 1;
  flex: 1;
  position: relative;
`;

export const UserView = styled.div`
  background-color: #fff;
  max-width: 120rem;
  margin: 0 auto;
  min-height: 100vh;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.07);
  display: flex;
`;

export const UserViewMenu = styled.nav`
  flex: 32rem 0 0;
  background-image: linear-gradient(to right bottom, #7dd56f, #28b487);
  padding: 4rem 0;
`;

export const SideNav = styled.div`
  list-style: none;
`;

export const SideNavLi = styled.li`
  margin: 1rem 0;
  border-left: 0 solid #fff;
  transition: all 0.3s;
`;

export const SideNavLiA = styled.div`
  padding: 1rem 4rem;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  color: #fff;
  font-size: 1.5rem;
  text-transform: uppercase;
  /* font-weight: 400; */
  text-decoration: none;
  transition: all 0.3s;

  a {
    text-decoration: none;
    margin-left: 10%;
    color: #fff;
  }
`;

export const Icon = styled.div`
  height: 1.9rem;
  width: 1.9rem;
  fill: #f7f7f7;
  margin-right: 2rem;
`;

export const UserViewContent = styled.div`
  -webkit-box-flex: 1;
  flex: 1;
  padding: 7rem 0;
`;

export const UserViewFormContainer = styled.div`
  max-width: 68rem;
  margin: 0 auto;
  padding: 0 8rem;
`;

export const HeadingSecondary = styled.h2`
  font-size: 2.25rem;
  text-transform: uppercase;
  font-weight: 700;
  color: #55c57a;
  letter-spacing: 0.1rem;
  line-height: 1.3;
  display: inline-block;
  margin-bottom: 3rem;
`;

export const FormUserData = styled.form``;

export const FormGroup = styled.div`
  margin-bottom: 2.5rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
`;

export const Input = styled.input`
  display: block;
  font-family: inherit;
  font-size: 1.5rem;
  color: inherit;
  padding: 1.25rem 1.75rem;
  border: none;
  width: 100%;
  background-color: #f2f2f2;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  transition: all 0.3s;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const FormGroupMaBtMd = styled.div`
  margin-bottom: 3rem !important;
`;

export const FormGroupFormPhotoUpload = styled.div`
  margin-bottom: 2.5rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-size: 1.6rem;
`;

export const Image = styled.img`
  height: 7.5rem;
  width: 7.5rem;
  border-radius: 50%;
  margin-right: 2rem;
`;

export const FormInputUpload = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export const FormUploadLabel = styled.label`
  color: #55c57a;
  display: inline-block;
  text-decoration: none;
  border-bottom: 1px solid #55c57a;
  padding: 3px;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  cursor: pointer;
`;

export const FormGroupRight = styled.div`
  text-align: right !important;
`;

export const Button = styled.button`
  padding: 1.25rem 3rem !important;
  font-size: 1.4rem !important;
  background-color: #55c57a;
  color: #fff;
  border-radius: 10rem;
  text-transform: uppercase;
  display: inline-block;
  text-decoration: none;
  position: relative;
  font-weight: 400;
  backface-visibility: hidden;
  border: none;
  cursor: pointer;
`;

export const Line = styled.div`
  margin: 6rem 0;
  width: 100%;
  height: 1px;
  background-color: #e0e0e0;
`;
