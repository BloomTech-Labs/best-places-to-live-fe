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
width: auto;
height: 20%;
padding-top: 11%;
    h1 {
    color: white;
    }
    
    input{
    width: 100%;
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
    }
`;