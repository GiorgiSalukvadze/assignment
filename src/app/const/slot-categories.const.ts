import { CategoryTranslationKeys } from './lang-key.const';

export enum SlotCategoriesEnum {
  POPULAR = 'web:popular',
  FAVORITES = 'web:favorites',
  NEW_GAMES = 'web:new_games',
  BUY_BONUS = 'web:buy_bonus',
  HISTORY = 'web:history'
}

export const SlotCategories = [
  {
    icon: 'top-slots.svg',
    name: CategoryTranslationKeys.POPULAR,
    category: SlotCategoriesEnum.POPULAR
  },
  {
    icon: 'favorites.svg',
    name: CategoryTranslationKeys.FAVORITES,
    category: SlotCategoriesEnum.FAVORITES
  },
  {
    icon: 'new-games.svg',
    name: CategoryTranslationKeys.NEW_GAMES,
    category: SlotCategoriesEnum.NEW_GAMES
  },
  {
    icon: 'bonus.svg',
    name: CategoryTranslationKeys.BUY_BONUS,
    category: SlotCategoriesEnum.BUY_BONUS
  },
  {
    icon: 'history.svg',
    name: CategoryTranslationKeys.HISTORY,
    category: SlotCategoriesEnum.HISTORY
  }
];
