import React from 'react-router-dom'
import styled from "styled-components";

export const NavBar = styled.div`
background-color:white
padding:1%;
`;

export const NavLinks = styled.div`
width:15%;
display:flex;
justify-content: space-between;
`;

export const NavBtn = styled.button`{
 width: @width;
 height: @height;
 color: #2B7BE3;
 font-weight: 500;
 text-align: center;
 background-color: #F3FSF9;
 border: 1px solid #2B7BE3;
 border-radius: 5px;
 cursor: pointer;
 font-family: ‘Rubik’, sans-serif;
 &:hover {
   background-color: F3FSF9;
   color: #E67271
   border: none;
 }`