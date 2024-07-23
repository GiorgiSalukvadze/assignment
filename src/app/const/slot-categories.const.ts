export enum SlotCategoriesEnum {
  POPULAR = "web:popular",
  FAVORITES = "web:favorites",
  NEW_GAMES = "web:new_games",
  BUY_BONUS = "web:buy_bonus",
  HISTORY = "web:history",
}

export const SlotCategories = [
  {
    icon: "top-slots.svg",
    name: "Top Slots",
    category: SlotCategoriesEnum.POPULAR,
  },
  {
    icon: "favorites.svg",
    name: "Favorites",
    category: SlotCategoriesEnum.FAVORITES,
  },
  {
    icon: "new-games.svg",
    name: "New Games",
    category: SlotCategoriesEnum.NEW_GAMES,
  },
  {
    icon: "bonus.svg",
    name: "Buy Bonus",
    category: SlotCategoriesEnum.BUY_BONUS,
  },
  {
    icon: "history.svg",
    name: "History",
    category: SlotCategoriesEnum.HISTORY,
  },
];
