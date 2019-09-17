import styled from "styled-components";

export const Header = styled.div`
background-color:white
padding:1%;
width: 20%;
`;

export const NavBar = styled.div`
display: flex;
align-items: center;
justify-content: start-end;
`;

export const LogoBox = styled.img`
background-size: cover;
background-repeat: no-repeat;
background-position: center; 
position: relative;
margin-right:5px;
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
 }`