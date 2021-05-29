import { useContext } from "react";
import { useHistory } from "react-router-dom";

import { HeroContext } from "@core/context";
import { heroes as mockHeroes } from "@mocks/heroes";

export const useHeroes = () => {
  const { heroes, setHeroes, setSelectedHero, setIsFetching } =
    useContext(HeroContext);
  const history = useHistory();
  const fetchHeroes = async () => {
    return new Promise((res) => {
      setIsFetching(true);
      setTimeout(() => {
        setHeroes(mockHeroes);
        setIsFetching(false);
        res({ ok: true });
      }, 1500);
    });
  };

  const selectHeroAndPush = (id: number) => {
    const selectedHero = heroes.find((hero) => hero.id === id);
    if (selectedHero) {
      setSelectedHero(selectedHero);
      history.push("/fight");
    }
  };

  return {
    fetchHeroes,
    heroes,
    selectHeroAndPush,
  };
};
