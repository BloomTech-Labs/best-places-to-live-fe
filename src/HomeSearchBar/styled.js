import React from 'react-router-dom'
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
`;

export const SearchContainer = styled.span`
display:flex;
flex-direction:column;
width: auto;
height: 20%;
padding-top: 11%;
    h1 {
    color: white;
    }
`;

export const SearchBar = styled.input`
`;





//   @media @tablet {
//       height: 40vh;
//   }

//   span {
//       padding-top: 11%;
//       .flex-box(column, wrap);
//       .custom-layout(center, center);

//       button {
//           .join-button(120px, 46px);
//       }
//   }

//   #banner-txt{
//       font-size: @giant-text;
//       font-weight: 400;
//       color: white;

//       @media @tablet {
//           font-size: @medium-text;
//           font-weight: 400;
//       }
//   }

//   #banner-sub-text{
//       color: whitesmoke;

//       @media @tablet {
//           font-size: @medium-text;
//       }
//   }
// }