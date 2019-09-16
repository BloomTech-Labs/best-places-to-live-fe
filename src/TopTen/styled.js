import styled from 'styled-components'

export const TopTenMasterContainer = styled.div`
border-top:10px solid #E67271;
display:flex;
justify-content:center;
flex-direction:column;
`;


export const TopTenTitle = styled.div`
margin:3% 0%;
display:flex;
align-content:center;
align-items:center;
flex-direction:column

        button{
        margin-top:1%;
        width:10%;
        font-weight: 600;
        text-align: center;
        padding: 8px 16px;
        border: 1px solid black;
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
            border:1px solid white;
        }
`;



export const TopTenCardContainer =  styled.div`
border:1px solid red;
display:flex;
flex-wrap:wrap;
width:100%;
z-index: 1;
perspective: 1000px;
`;


export const TopTenCard = styled.div`
border:1px solid yellow;
`;

export const TopTenCardSide = styled.div`
`;

export const TopTenBody = styled.div`
  transform-style: preserve-3d;
  transition: all .7s linear;
`;

export const TopTenCardFront = styled.div`

`;

export const TopTenCardBack = styled.div`
`;

export const CardDetail = styled.div`
position: absolute;
background-color: rgba(255, 255, 255, 0.7);
bottom: 0.01rem;
width: 100%;
height: 15%;
display:flex;
justify-content:space-around;
align-items:center;
    p {
    font-weight: 500;
    text-align: center;
}
`;