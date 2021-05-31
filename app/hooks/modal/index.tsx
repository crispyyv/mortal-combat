import { useState } from "react";

export const useModal = () => {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content = null) => {
    setModalContent(content);
    setModal(true);
  };

  const closeModal = () => setModal(false);

  return { modal, openModal, closeModal, modalContent };
};
