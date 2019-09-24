import styled from "styled-components";

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

export const Krunker = styled.a`
border;1px solid red;
position:absolute
left:97%;
color:white;
&:hover{
color:white;
}`;
