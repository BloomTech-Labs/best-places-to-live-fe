import styled from "styled-components";

// export const MasterDashBox = styled.div``; saving for Main div around DashboardMenu component

export const UserInfoBox = styled.div``;

export const ContentBox = styled.div`
display: flex;
flex-direction: row;
height: 100%;
display: flex;
flex-direction: row;
border: 3px solid yellow;
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
color: #1F252E;
border: 3px solid purple;


  a {
    text-Decoration: none;
    margin-left: 10%;
    color: #1F252E;
  }

`;

// for the component being rendered by the switch case
export const ComponentBox = styled.div`
width: 20%;
margin-left: 20%;
`;

// Profile option styling
export const ProfileBox = styled.div`

`;

export const FormBox = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;

input{
  width: 100%;
  padding: 12px;
  border: 1px solid #092244;
  border-radius: 4px;
  margin: 5px 0;
  opacity: 0.85;
  display: inline-block;
  font-size: 17px;
  line-height: 20px;
  outline:none;
  text-decoration: none; 
  }

button {
  font-weight: 600;
  text-align: center;
  height: 46px;	
  width: 100%;	
  background-color: #22CE8B;
  border: 0px solid white;
  color: #FFFFFF;
  font-size: 1.5rem;
  border-radius: 4px;
  &:hover {
    background-color: white;
    color: #22CE8B;
    border: solid 3px #22CE8B;
  }
}
`;

// Styling for SavedCities
export const SavedCitiesContainer = styled.div`
display:flex;
justify-content:center;
flex-direction:row;
flex-wrap: wrap;
width: 500px;

`;

export const CitiesTitle = styled.div`
display:flex;
justify-content:center;
`;

export const SavedCityCardContainer =  styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:space-evenly;
align-content:center;

`;

export const CityCard = styled.div`
height: 20%;
width: 35%;
position: relative;
margin-top:2%;
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
display:flex;
justify-content:space-around;
align-items:center;
    p {
    font-weight: 500;
    text-align: center;
}
`;