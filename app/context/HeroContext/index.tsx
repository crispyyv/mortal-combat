import React, { createContext, useState, memo } from "react";

import { IHero } from "@components/HeroCard/types";
import { IHeroContextType } from "../types";

export const HeroContext = createContext<IHeroContextType>(null);

export const MemoizedHeroContext: React.FC = memo(({ children }) => {
  const [selectedHero, setSelectedHero] = useState<IHero>(null);
  const [heroes, setHeroes] = useState<IHero[]>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  return (
    <HeroContext.Provider
      value={{
        selectedHero,
        setSelectedHero,
        heroes,
        setHeroes,
        isFetching,
        setIsFetching,
      }}
    >
      {children}
    </HeroContext.Provider>
  );
});
