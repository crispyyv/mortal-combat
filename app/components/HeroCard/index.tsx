import React from "react";

import { CardWrapper, CardHeading, CardBGImage } from "./styles";
import { HeroCardProps } from "./types";

export const HeroCard = ({ hero, choosen }: HeroCardProps) => {
  return (
    <CardWrapper choosen={choosen}>
      <CardHeading>{hero.hero}</CardHeading>
      <CardBGImage url={hero.img} />
    </CardWrapper>
  );
};
