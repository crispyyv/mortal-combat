import React, { useContext } from "react";
import { createPortal } from "react-dom";

import { ModalContext } from "@context";

import {
  ModalWrapper,
  ModalInner,
  ModalCloseInner,
  ModalContent,
} from "./styles";

export const Modal = () => {
  const { modalContent, closeModal, modal } = useContext(ModalContext);
  if (modal)
    return createPortal(
      <ModalWrapper>
        <ModalInner>
          <ModalCloseInner onClick={closeModal}>&times;</ModalCloseInner>
          <ModalContent>{modalContent}</ModalContent>
        </ModalInner>
      </ModalWrapper>,
      document.querySelector("#modal-root")
    );
  else return null;
};
