import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
`;

export const ModalInner = styled.div`
  background: #fff;
  position: relative;
  padding: 25px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 5px;
  max-width: 350px;
  max-height: 500px;

  display: flex;
  flex-direction: column;
  aling-items: flex-start;

  font-size: 25px;
`;

export const ModalCloseInner = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: -25px;
  font-weight: bold;

  align-self: flex-end;
  border-radius: 50%;
  background: tomato;
  outline: none;
  border: none;
  margin-bottom: 5px;
  width: 20px;
  height: 20px;
`;

export const ModalContent = styled.p``;
