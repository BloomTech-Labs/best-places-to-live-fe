import styled from "styled-components";

export const Header = styled.div`
background-color:white
padding:1%;
width: 20%;
`;

export const NavBar = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
`;

export const LogoBox = styled.img`
background-size: cover;
background-repeat: no-repeat;
background-position: center; 
position: relative;
width: 50%;
`;

export const NavBtn = styled.button`{
 font-weight: 600;
 text-align: center;
 padding: 8px 16px;
 border: 0px solid white;
 background: none;
 border-radius: 8px;
 cursor: pointer;
 font-family: ‘Rubik’, sans-serif;
 font-size: 1.5rem;
 &:hover {
   background-color: #E67271;
   color: white;
   border: none;
 }`

//  header {
//   .flex-box(row, wrap);
//   .custom-layout(space-between, flex-end);
//   margin-bottom: 25px;
//   padding-top: 50px;

//   @media @desktop{
//       .flex-box(column,wrap);
//       .custom-layout(space-between, center);
//   }

//   h1 {
//       padding-left: 4%;
//   }

//   nav {
//       .flex-box(row, wrap);
//       .custom-layout(space-between, flex-end);
//       width: 50%;
//       padding-left: 10%;
//       padding-right: 5%;

//       @media @desktop{
//           width: 100%;
//       }

//       a {
//           font-size: @small-text;
//           text-decoration: none;
//           color: @normal-txt-color;
//       }
//   }
// }