import { NavbarTranslationKeys } from './lang-key.const';
import { AppRoutes } from './routes.const';

export const NavbarItems = [
  {
    route: AppRoutes.SPORT,
    icon: 'sports.svg',
    title: NavbarTranslationKeys.SPORT
  },
  {
    route: AppRoutes.LIVE,
    icon: 'live.svg',
    title: NavbarTranslationKeys.LIVE
  },
  {
    route: AppRoutes.SLOTS,
    icon: 'slots.svg',
    title: NavbarTranslationKeys.SLOTS
  },
  {
    route: AppRoutes.CASINO,
    icon: 'casino.svg',
    title: NavbarTranslationKeys.CASINO
  }
];
