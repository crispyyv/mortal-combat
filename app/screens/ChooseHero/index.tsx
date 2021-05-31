import React, { useEffect, useState, memo, useContext } from "react";

import { HeroCard } from "@components";

import { matrixMovement, MATRIX } from "@helpers/index";

import {
  ChoosedHero,
  Heading,
  HeroesWrapper,
  Notation,
  Wrapper,
} from "./styles";
import { useHeroes } from "@hooks";
import { HeroContext } from "@context";

const findInMatrix = (i, j) => MATRIX[i][j];

export const ChooseHero = memo(() => {
  const { isFetching, heroes } = useContext(HeroContext);
  const { fetchHeroes, selectHeroAndPush } = useHeroes();

  const [position, setPosition] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    !heroes?.length && fetchHeroes().catch(console.error);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        //TODO save in context
        const selectedId = findInMatrix(position[0], position[1])?.id;
        selectedId && selectHeroAndPush(selectedId);
      }
      matrixMovement(event, position, setPosition);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <Wrapper>
      <Heading>Choose fighter</Heading>
      <Notation>Use arrow keys for move and Enter for choose</Notation>
      {isFetching ? (
        <div>loading...</div>
      ) : (
        <>
          <HeroesWrapper>
            {heroes?.map((el) => (
              <HeroCard
                hero={el}
                key={el.id}
                choosen={findInMatrix(position[0], position[1])?.id === el.id}
              />
            ))}
          </HeroesWrapper>
          <ChoosedHero>
            Your choise: {findInMatrix(position[0], position[1])?.hero}
          </ChoosedHero>
        </>
      )}
    </Wrapper>
  );
});
