import React, { createContext, memo } from "react";

import { Modal } from "@components";
import { useModal } from "@hooks";

export const ModalContext = createContext(null);

export const MemoizedModalContext: React.FC = memo(({ children }) => {
  const { modal, openModal, closeModal, modalContent } = useModal();

  return (
    <ModalContext.Provider
      value={{ modal, openModal, closeModal, modalContent }}
    >
      <Modal />
      {children}
    </ModalContext.Provider>
  );
});
