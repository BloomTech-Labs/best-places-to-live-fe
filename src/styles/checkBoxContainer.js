import styled from "styled-components";

export const CheckBoxContainer = styled.div`
  margin: 4px;
  background-color: #efefef;
  border-radius: 4px;
  border: 1px solid #d0d0d0;
  overflow: auto;
  float: left;

  input {
    margin-right: 100px;
    position: absolute;
    top: -20px;
  }

  label {
    float: left;
    width: 4em;
  }

  span {
    text-align: center;
    padding: 3px 0px;
    display: block;
  }

  input:checked + span {
    background-color: #911;
    color: #fff;
  }
`;
