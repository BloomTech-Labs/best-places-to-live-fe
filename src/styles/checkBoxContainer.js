import styled from "styled-components";

export const CheckBoxContainer = styled.div`
  margin: 4px;
  background-color: white;
  border: 1px solid black;
  border-radius: 4px;
  float: left;

  input {
    margin-right: 100px;
    position: absolute;
    top: -20px;
  }

  span {
    text-align: center;
    display: block;
    width: fit-content;
    padding: 10px 10px;
    border-radius: 4px;
    border: 1px solid #d0d0d0;
  }

  span:hover {
    cursor: pointer;
  }

  input:checked + span {
    background-color: #959595;
  }
`;
