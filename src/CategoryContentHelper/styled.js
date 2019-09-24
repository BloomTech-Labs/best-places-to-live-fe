import styled from "styled-components";
import {device} from "../Device Breakpoints";

export const MainComponentBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 5% 0% 6% 0%;
@media ${device.mobileM}{
       justify-content:center;
        }
`;

export const TitleBox = styled.div`
text-align: center;
padding: 2% 0% 2% 0%;
width: 60%;

 p {
   font-size: 1.6rem;
   padding-top: 2%;
 }
 @media ${device.mobileM}{
  h1{
  font-size:35px;
  }
 }
`;

export const CategoryContentBox = styled.div`
display: flex;
width: 60%;

    @media ${device.mobileM}{
        flex-direction:column;
        }
`;

export const CategoryCard = styled.div`
display: flex;
flex-direction: column;
width: 25%;
align-items: center;
margin: 4% 4% 0 4%;

 h4 {
   padding: 10% 0% 10% 0%;
 }

 p {
   text-align: center;
 }
 
 @media ${device.mobileM}{
        width:90%
        margin-top:20px;
        }
`;

export const IconBox = styled.img`
width: 46px;
height: 46px;
`;
