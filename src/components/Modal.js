import React from "react";
import styled from "styled-components";
import theme from "../theme";

const Modal = ({ show, children, handleClose }) => {
  const handleClickClose = e => {
    if (e.target.classList.contains("ModalContainer")) {
      handleClose();
    }
  };
  const ModalContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1000;
    display: ${() => (show ? "block" : "none")};
  `;

  const ModalContent = styled.div`
    position: fixed;
    background-color: white;
    width: 100%;
    top: 50%;
    left: 50%;
    min-height: 100vh;
    transform: translate(-50%, -50%);

    @media (min-width: 460px) {
      width: 80%;
      height: auto;
      height: 710px;
      max-height: 100%;
      min-height: 0;
    }
  `;

  return (
    <ModalContainer
      onClick={handleClickClose}
      display={show ? "block" : "none"}
      className="ModalContainer"
    >
      <ModalContent>{children}</ModalContent>
    </ModalContainer>
  );
};

export default Modal;
