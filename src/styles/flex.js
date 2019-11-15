import styled, { css } from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  ${props =>
    props.jc &&
    css`
      justify-content: center;
    `}
  ${props =>
    props.ac &&
    css`
      align-items: center;
    `}
  ${props =>
    props.nowrap &&
    css`
      flex-wrap: none;
    `}
  ${props =>
    props.jsb &&
    css`
      justify-content: space-between;
    `}
  
  ${props =>
    props.column &&
    css`
      flex-direction: column;
    `}
`;
