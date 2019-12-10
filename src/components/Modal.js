import React from "react";
import { Container, Button } from "../styles/index";
import styled from "styled-components";

const Modal = ({ handleClose, show, children }) => {
  const ModalContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgb(255, 255, 255);
    display: ${() => (show ? "block" : "none")};
  `;

  const ModalContent = styled.div`
    position: fixed;
    background-color: white;
    width: 80%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    //Modal to scroll
    max-height: 100vh;
    overflow-y: auto;
  `;

  return (
    <ModalContainer display={show ? "block" : "none"}>
      <ModalContent>
        {children}
        <Button onClick={handleClose}>close</Button>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
