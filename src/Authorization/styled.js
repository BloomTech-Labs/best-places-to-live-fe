import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 200px 0px 0px 0px;
  height: 10%;
  flex-direction: column;
  align-items: center;


  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 15%;
    @media (max-width: 800px) {
      width: 100%;
    }
  }
  button {

  }
  h1 {
    font-size: 3rem;
    @media (max-width: 800px) {
      align-self: flex-start;
    }
  }
  input {
    width: 80%;
    @media (max-width: 800px) {
      width: 100%;
    }
  }
`;