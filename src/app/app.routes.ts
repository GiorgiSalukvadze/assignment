import { Routes } from '@angular/router';
import { AppRoutes } from './const/routes.const';

export const routes: Routes = [
  {
    path: '',
    redirectTo: AppRoutes.SLOTS,
    pathMatch: 'full'
  },
  {
    path: AppRoutes.SLOTS,
    loadComponent: () => import('./views/slots/slots.component').then(m => m.SlotsComponent)
  },
  {
    path: AppRoutes.SPORT,
    loadComponent: () => import('./views/sport/sport.component').then(m => m.SportComponent)
  },
  {
    path: AppRoutes.LIVE,
    loadComponent: () => import('./views/live/live.component').then(m => m.LiveComponent)
  },
  {
    path: AppRoutes.CASINO,
    loadComponent: () => import('./views/casino/casino.component').then(m => m.CasinoComponent)
  }
];
