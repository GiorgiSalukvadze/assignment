export enum FilterTypes {
  CATEGORY = 'category',
  PROVIDER = 'provider'
}

export interface ProviderI {
  _id: string;
  name: string;
  iframeW: number;
  iframeH: number;
  vendor: string;
  provider: string;
  type: string;
  order: number;
  enabled: boolean;
  logo: string;
  tags: string[];
  gamesCount: number;
}

export interface SlotCategoryI {
  type: string;
  category: string;
  group: string;
  platform: string;
  active: boolean;
  background: string;
  games: GameI[];
  icon: string;
  initialRowCount: number;
  multiLangName: { [key: string]: string };
  name: string;
  onlyLargeImages: boolean;
  order: number;
  totalGames: number;
}

export interface GameI {
  game_id: string;
  name: string;
  provider: string;
  providerName: string;
  image: string;
  url: string;
  order: number;
  tags: string[];
  favoriteCount: number;
  remoteId: string;
  gameId: string;
  image2: string;
}

export interface SlotsByProviderI {
  type: string;
  provider: string;
  vendor: string;
  iframeW: number;
  iframeH: number;
  name: string;
  order: number;
  tags: string[];
  games: GameI[];
  totalGames: number;
}
