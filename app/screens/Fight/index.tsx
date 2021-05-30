import React, { useContext, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { sample, sampleSize } from "lodash";

import { HeroCard } from "@components";
import { HeroContext } from "@core/context";
import { useHeroes } from "@hooks";
import { updateEmojiByIndex } from "@helpers/index";

import { emojies as mockEmojies } from "@mocks/emojies";

import {
  FightWrapper,
  FightHeading,
  FightTimer,
  VersusWrapper,
  Icon,
  IconsWrapper,
  IconsAdditional,
} from "./styles";

export const Fight = () => {
  const history = useHistory();

  const timerRef = useRef<NodeJS.Timeout>(null);
  const [emojies, setEmojies] = useState<string[]>(sampleSize(mockEmojies, 6));
  const [isActive, setIsActive] = useState<boolean>(true);
  const [secondsLeft, setSecondsLeft] = useState<number>(10);
  const [lastActiveIcon, setLastActiveIcon] = useState<number>(null);

  const { selectedHero } = useContext(HeroContext);

  const { getRandomHero } = useHeroes();

  const [randomHero] = useState(getRandomHero());

  useEffect(() => {
    if (!selectedHero?.id) {
      history.push("/");
    }
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const index = updateEmojiByIndex(event);

      if (Number(index) !== -1) {
        setLastActiveIcon(index);
        setEmojies((prev) =>
          prev.map((emojie, idx) =>
            idx === index ? sample(mockEmojies) : emojie
          )
        );
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (isActive) {
      timerRef.current = setInterval(() => {
        if (secondsLeft !== 0) {
          setSecondsLeft((prev) => prev - 1);
        } else if (secondsLeft === 0) {
          setIsActive(false);
          history.push("/");
        }
      }, 1000);
    }

    return () => {
      clearInterval(timerRef.current);
    };
  }, [isActive, secondsLeft]);

  return (
    <FightWrapper>
      <FightHeading>
        {selectedHero?.hero} vs {randomHero?.hero}
      </FightHeading>
      <FightTimer>Fight will be ending in {secondsLeft} seconds</FightTimer>
      <VersusWrapper>
        <HeroCard hero={selectedHero} large withoutText />
        <HeroCard hero={randomHero} large withoutText />
      </VersusWrapper>

      <IconsWrapper>
        {emojies.map((em, idx) => (
          <Icon key={idx} isLastChoosed={lastActiveIcon === idx}>
            {em}
          </Icon>
        ))}
      </IconsWrapper>

      <IconsAdditional>
        For change emotion use "q", "w", "e", "r", "t", "y"
      </IconsAdditional>
    </FightWrapper>
  );
};
