import styled from "styled-components";

// export const NavBar = styled.div`
//   display: flex;
//   background-color:white;
//   padding:1%;
// `

export const NavLinks = styled.div`
  width:15%;
  display:flex;
  justify-content: space-evenly;
  align-items; center
`

// export const NavBtn = styled.button`{
//   width: @width;
//   height: @height;
//   color: #2B7BE3;
//   font-weight: 500;
//   text-align: center;
//   background-color: #F3FSF9;
//   border: 1px solid #2B7BE3;
//   border-radius: 5px;
//   cursor: pointer;
//   font-family: ‘Rubik’, sans-serif;
//   &:hover {
//     background-color: F3FSF9;
//     color: #E67271
//     border: none;
//   }
//   marign: 10px;
  
// `
// export const Header = styled.div`
// background-color:white
// width: 20%;
// display: flex;
// align-items: center;
// justify-content: start-end;
// `;

export const NavBar = styled.nav.attrs({
  className: "fixed-nav"
})`
position:fixed;
background-color:white
width: 100%;
 display: flex;
 align-items: center;
 justify-content: start-end;
 padding: 0.5% 0% 0.5% 2%;
`;

export const LogoBox = styled.img`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  margin-right: 5px;
  width: 50px;
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
 outline:none; 
 text-decoration:none;
 &:hover {
   background-color: #E67271;
   color: white;
   border: none;
 }`;
