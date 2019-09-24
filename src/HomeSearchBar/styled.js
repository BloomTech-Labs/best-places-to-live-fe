import styled from "styled-components";



export const Container = styled.div`
background-image:url('https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
background-size: cover;
background-repeat: no-repeat;
background-position: center; 
position: relative;
height: 60vh;
width: 100%;
display:flex;
flex-flow: row wrap
justify-content: center;
border-radius: 50px:
`;

export const SearchContainer = styled.span`
display:flex;
flex-direction:column;
align-items:center;
width:100%;
height: 20%;
padding-top: 11%;

    h1 {
    color: white;
    }
    form{
    display:flex;
    justify-content:center;
    width:100%;
    }
    
    input{
    border:1px solid yellow;
    width: 20%;
    padding: 12px;
    border: none;
    border-radius: 4px;
    margin: 5px 0;
    opacity: 0.85;
    display: inline-block;
    font-size: 17px;
    line-height: 20px;
    outline:none;
    text-decoration: none; 
    text-align:center;
    }
`;
export const ButtonWrapper = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
width:60%;
`;

export const Button = styled.div`
font-weight: 600;
text-align: center;
padding: 8px 16px;
border: 0px solid white;
background: #E67271;
border-radius: 8px;
font-family: ‘Rubik’, sans-serif;
font-size: 1.5rem;
outline:none; 
text-decoration:none;
margin:1% 1%;
color:white;
transition: transform .2s;

 &:hover {
   background-color: white;
   color: black;
   border: none;
   transform: scale(.90);
`;