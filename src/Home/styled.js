// const styled = require('styled-components')
import styled from 'styled-components';

export const TopTen = styled.h1`
display:flex;
justify-content:center;
border-top: 3px solid red;
`;

export const CityCards = styled.div`
    display:flex;
    justify-content:space-around;
    flex-wrap: wrap;
    `;

export const CardI = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin:3%;
  border:2px solid black;
  height:100px;
  width:100px;
  
  &:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  padding:3px;
}
`;



// module.exports = {
//     Button: styled.button`
//         display: flex ;
//         justify-content: center;
//         align-content: center;
//     `,
//     Section: styled.section`
//         display: flex;
//         justify-content: center;
//         align-content: center;
//     `,
// }