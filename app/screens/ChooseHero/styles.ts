//@ts-nocheck

import styled from "styled-components";

export const Wrapper = styled.div`
  min-heigth: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const HeroesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;

  width: 100%;
`;

export const Notation = styled.span`
  color: gray;
  margin-bottom: 10px;
`;

export const ChoosedHero = styled.p`
  font-size: 20px;
  color: darkmagenta;
  margin-top: 20px;
`;
