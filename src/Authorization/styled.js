import styled from 'styled-components'
import banner from '../images/banner.jpg'


export const LoginImg = styled.div`
background-image:url(${banner});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
position:relative;
filter:blur(6px);
height:100vh;
`;


export const LoginContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
position:absolute;
top: 25%;
right:36%;
`;

export const LoginFormParent = styled.div`
display:flex;
flex-direction:column;
align-items:center;
border-radius:10px;
padding:10%;
width:50vh;
height:50vh;
 img{
 &:hover{
 opacity:0.85;
 }
 }
`;

export const LoginForm = styled.form`
width:100%;
height:100%;
display:flex;
justify-content:space-evenly;
align-items:center;
flex-direction:column;
        
        input{
            width: 75%;
            padding: 12px 20px;
            margin: 8px 0;
            display: inline-block;
            border: 1px solid #ccc;
            border-radius:20px;
            box-sizing: border-box;
            text-decoration: none;
            outline:none;
            }
`;

export const SignInButton = styled.button`
background-color: lightgrey;
color: white;
width: 50%;
padding: 5px;
border:none;
border-radius: 4px;
margin:5%;
display: inline-block;
font-size: 20px;
line-height: 20px;
text-decoration: none;
   &:hover{
   opacity: 0.85;
   }
`;

export const GoogleButton = styled.button`
background-color: #dd4b39;
color: white;
width: 50%;
padding: 5px;
border: none;
border-radius: 4px;
opacity: 1;
display: inline-block;
font-size: 20px;
line-height: 20px;
text-decoration: none;
        &:hover{
            opacity: 0.85;
        }   
`;

export const FooterButtons = styled.a`
width:90%;
margin:5% 0%;
padding:2% 5%;
display:flex;
justify-content:space-between;
    a{
    text-decoration:none;
    outline:none;
    color:white;
    }
`;

export const RegisterBottomLinks = styled.div`
 a{
 text-decoration:none;
 outline:none;
 color:white;
 }
`;

