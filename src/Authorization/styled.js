import React from 'react-router-dom';
import styled from 'styled-components'


export const RegisterContainer = styled.div`
border:1px solid yellow;
background-image:url("");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
position:relative;
display:flex;
justify-content:center;
height:100%;
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
