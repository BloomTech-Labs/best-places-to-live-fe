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
// background-image:url(${banner});
// background-position: center;
// background-repeat: no-repeat;
// background-size: cover;
// position:relative;
display:flex;
justify-content:center;
align-items:center;
position:absolute;
top: 25%;
right:36%;
// height: 100vh;
`;

export const LoginFormParent = styled.div`
display:flex;
background-color:white;
flex-direction:column;
align-items:center;
border-radius:10px;
width:50vh;
height:50vh;
`;

export const LoginForm = styled.form`
width:100%;
height:100%;
display:flex;
justify-content:space-evenly;
align-items:center;
flex-direction:column;
        input{
        width: 50%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
    }
`;

export const LoginButtons = styled.div`
`;







// Commented out until we see lloyds register page

export const RegisterContainer = styled.div`

display:flex;
justify-content:center;
align-items:center;
height: 100vh;
`;

export const RegisterFormParent = styled.div`
border:1px solid black;
display:flex;
flex-direction:column;
align-items:center;
`;

export const RegisterForm = styled.form`
border:1px solid red;
display:flex;
flex-direction:column;
justify-content:center;
    padding:2%;
        input{
        margin:2%;
    }
`;
