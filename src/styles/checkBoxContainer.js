import styled from "styled-components";

export const CheckBoxContainer = styled.div`
  margin: 4px;
  background-color: #e6e4ea;
  border-radius: 3rem;
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
    border-radius: 3rem;
    color: #232326;
    box-sizing: border-box;
    font-size: 1rem;
    /* for fast moused chrome users       user-select: none;
    */
  }

  span:hover {
    cursor: pointer;
  }

  input:checked + span {
    background-color: #024bca;
    color: white;
  }
`;
