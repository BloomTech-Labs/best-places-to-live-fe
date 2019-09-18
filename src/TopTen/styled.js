import styled from "styled-components";

export const TopTenMasterContainer = styled.div`
  // border-top:10px solid #E67271;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const TopTenTitle = styled.div`
margin:3% 0%;
display:flex;
align-content:center;
align-items:center;
flex-direction:column;

        p {
          font-size: 1.6rem;
          padding-top: 2%;
        }

        button{
        margin-top:1%;
        width:10%;
        font-weight: 600;
        text-align: center;
        padding: 8px 16px;
        border: 1px solid black;
        background: none;
        border-radius: 8px;
        cursor: pointer;
        font-family: ‘Rubik’, sans-serif;
        font-size: 1.5rem;
        outline:none; 
        text-decoration:none;
        &:hover {
            background-color: #E67271;
            color: white;
            border:1px solid white;
        }
`;

export const TopTenWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
`;

export const CardDetail = styled.div`
position:absolute;
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

// Category Icon filter

export const CategoryContentBox = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-evenly;
`;

export const IconBox = styled.img`
  width: 46px;
  height: 46px;
`;

export const CardIcon = styled.img`
width:50%;
height:50%;
`;

export const TopTenImg = styled.img`
border-radius:20px;
`;

export const TopTenCardBack = styled.div`
display:flex;
padding:4%;
height:100%;
align-content:center;
flex-wrap:wrap;
color:black;
`;

export const ScoreColumn = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
font-size:20px;
margin:1px;
height:40%;
`;

export const TotalScore = styled.div`
display:flex;
align-items:center;
justify-content:center;
font-size:30px;
margin:5%;
width:100%;
height:20%;
`;