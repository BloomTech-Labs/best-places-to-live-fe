import React from 'react-router-dom'
import styled from 'styled-components'

export const TopTenContainer =  styled.div`
border:1px solid red;
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:space-evenly;
align-content:center;

`;



export const TopTenCard = styled.div`
height: 348px;
width: 292px;
position: relative;
margin-top:2%;
        img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
        }
`;

export const CardDetail = styled.div`
position: absolute;
background-color: rgba(255, 255, 255, 0.7);
bottom: 0.01rem;
width: 100%;
height: 10%;
    p {
    font-weight: 500;
    text-align: center;
}
`;


// .searchByActivity{
//     margin: 8% 4%;
//
//     div{
//
//         @media @phone{
//             text-align: center;
//         }
//     }
//
// .categoryContainer{
//         margin: 4% 0%;
//
//     .categoryTitle{
//             padding: 2% 0 2% 2%;
//
//             @media @phone{
//                 text-align: center;
//             }
//         }
//
//     .triPanelBox {
//         .flex-box(row, wrap);
//         .custom-layout(space-evenly, center);
//
//         .panel {
//                 height: 348px;
//                 width: 292px;
//                 position: relative;
//
//                 @media @phone {
//                     padding: 2% 0%;
//                 }
//
//                     div {
//                     position: absolute;
//                     background-color: rgba(255, 255, 255, 0.7);
//                     bottom: 0.01rem;
//                     width: 100%;
//                     height: 10%;
//                 }
//
//                     p {
//                     font-weight: 500;
//                     font-size: @card-title-text;
//                     text-align: center;
//                 }
//
//                     img {
//                     width: 100%;
//                     height: 100%;
//                     object-fit: cover;
//                     border-radius: 5px;
//                 }
//             }
//
//         .lastPanel {
//                 @media @desktop {
//                     display: none;
//                 }
//             }
//         }
//     }
// }




///////////////////////////////////////////

{/*<div className="panel lastPanel container">*/}
{/*    <img src="design-files/shea-rouda-471295-unsplash.jpg">*/}
{/*        <div><p>Downtown Denver</p></div>*/}
{/*</div>*/}