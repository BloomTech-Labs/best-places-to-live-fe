import React from "react";
import { Container, Button } from "../styles/index";

const Modal = ({ handleClose, show, children }) => {
  return (
    <Container
      display={show ? "block" : "none"}
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="100%"
      background="rgba(0, 0, 0, 0.6)"
    >
      <Container
        as="section"
        position="fixed"
        background="white"
        width="80%"
        height="auto"
        top="50%"
        left="50%"
        transform="translate(-50%,-50%)"
      >
        {children}
        <Button onClick={handleClose}>close</Button>
      </Container>
    </Container>
  );
};

export default Modal;
