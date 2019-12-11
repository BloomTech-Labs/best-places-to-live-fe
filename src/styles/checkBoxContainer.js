import styled from "styled-components";

export const CheckBoxContainer = styled.div`
  margin: 4px;
  background-color: #e6e4ea;
  border-radius: 45rem;
  float: left;

  input {
    margin-right: 100px;
    top: -20px;
    display: none;
  }

  span {
    text-align: center;
    display: block;
    width: 100%;
    padding: 10px 10px;
    border-radius: 45rem;
    color: #232326;
    box-sizing: border-box;
    font-size: 1rem;
  }

  span:hover {
    cursor: pointer;
  }

  input:checked + span {
    background-color: #024bca;
    color: white;
  }
`;
