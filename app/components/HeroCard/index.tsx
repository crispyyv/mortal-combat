import React from "react";

import { CardWrapper, CardHeading, CardBGImage } from "./styles";
import { HeroCardProps } from "./types";

export const HeroCard = ({
  hero,
  choosen,
  large = false,
  withoutText = false,
}: HeroCardProps) => {
  return (
    <CardWrapper choosen={choosen} isLarge={large}>
      {!withoutText && <CardHeading>{hero?.hero}</CardHeading>}
      <CardBGImage url={hero?.img} />
    </CardWrapper>
  );
};
