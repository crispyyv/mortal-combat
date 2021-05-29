export interface IHero {
  id: number;
  hero: string;
  img: string;
}

export type HeroCardProps = {
  hero: IHero;
  choosen?: boolean;
};

export interface ICardBGImageProps {
  readonly url: string;
}

export interface ICardWrapperProps {
  readonly choosen?: boolean;
}
