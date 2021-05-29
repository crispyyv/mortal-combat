import { Dispatch, SetStateAction } from "React";
import { IHero } from "@components/HeroCard/types";

export interface IHeroContextType {
  heroes: IHero[];
  setHeroes: Dispatch<SetStateAction<IHero[]>>;
  selectedHero: IHero;
  setSelectedHero: Dispatch<SetStateAction<IHero>>;
  isFetching: boolean;
  setIsFetching: Dispatch<SetStateAction<boolean>>;
}
