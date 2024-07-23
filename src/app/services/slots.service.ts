import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Signal, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { map, Observable, switchMap, tap } from 'rxjs';
import { SlotsEndpointsEnum } from '../const/endpoints.const';
import { SlotCategoriesEnum } from '../const/slot-categories.const';
import { FilterTypes, GameI, ProviderI, SlotCategoryI, SlotsByProviderI } from '../models/slots';

@Injectable({ providedIn: 'root' })
export class SlotsService {
  private http: HttpClient = inject(HttpClient);

  totalGames = signal<{ [key: string]: number } | null>(null);
  currentFilter = signal<{ type: FilterTypes; value: string | SlotCategoriesEnum }>({
    type: FilterTypes.CATEGORY,
    value: SlotCategoriesEnum.POPULAR
  });

  slots: Signal<GameI[]> = toSignal(
    toObservable(this.currentFilter).pipe(
      switchMap((filter: { type: string; value: string }) => {
        if (filter.type === FilterTypes.PROVIDER) {
          return this.getSlotsByProvider(filter.value);
        } else {
          return this.getSlotsByCategory(filter.value as SlotCategoriesEnum);
        }
      })
    ),
    {
      initialValue: []
    }
  );

  getCategoriesInfo(): Observable<{ [key: string]: number }> {
    const totalGames: { [key: string]: number } = {};
    return this.http.get<{ data: SlotCategoryI[] }>(SlotsEndpointsEnum.getCategories()).pipe(
      map((res: { data: SlotCategoryI[] }) => {
        res.data.forEach((category: SlotCategoryI) => {
          if ((Object.values(SlotCategoriesEnum) as string[]).includes(category.category)) {
            totalGames[category.category] = category.totalGames;
          }
        });
        return totalGames;
      })
    );
  }

  getProviders(): Observable<ProviderI[]> {
    return this.http.get<{ data: ProviderI[] }>(SlotsEndpointsEnum.getProviders()).pipe(map((res: any) => res.data));
  }

  getSlotsByProvider(provider: string): Observable<GameI[]> {
    return this.http
      .get<{ data: SlotsByProviderI }>(SlotsEndpointsEnum.getSlotsByProvider(provider))
      .pipe(map((provider: { data: SlotsByProviderI }) => provider.data.games));
  }

  getSlotsByCategory(category: SlotCategoriesEnum): Observable<GameI[]> {
    return this.http.get<{ data: SlotCategoryI[] }>(SlotsEndpointsEnum.getCategories()).pipe(
      map((categories: { data: SlotCategoryI[] }) => {
        return categories.data.find((item: SlotCategoryI) => item.category === category)?.games ?? [];
      })
    );
  }
}
