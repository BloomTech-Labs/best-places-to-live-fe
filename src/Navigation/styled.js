import styled from 'styled-components';

export const Button = styled.button`
color: #fff !important;
text-transform: uppercase;
text-decoration: none;
background: #ed3330;
padding: 5px;
margin:5px;
border-radius: 5px;
display: inline-block;
border: none;
transition: all 0.4s ease 0s;

&:hover {
background: black;
letter-spacing: 1px;
-webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
-moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
transition: all 0.4s ease 0s;
}
`;

export const Section = styled.section`
  display: flex;
  justify-content:flex-end;
  padding:5px;
  border-radius:7px;
  background: DimGrey;
  box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);;
`;

