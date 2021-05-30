import styled from "styled-components";
import { IconProps } from "./types";

export const FightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const FightHeading = styled.h1`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: medium;
`;

export const IconsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 150px);
  grid-template-rows: 150px 1fr;
  grid-gap: 20px;
  margin-top: 25px;
`;

export const Icon = styled.div<IconProps>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 90px;

  border-radius: 5px;
  border: 1px solid;

  border-color: ${(props) => (props.isLastChoosed ? "green" : "#eee")};
`;

export const VersusWrapper = styled.div`
  display: flex;
  width: 100%;
  jusitfy-content: space-between;
  align-items: center;

  & > :first-child {
    margin-right: 40px;
  }
`;

export const FightTimer = styled.div`
  font-size: 20px;
`;

export const IconsAdditional = styled.div`
  color: gray;
`;
