import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FilterTypes, ProviderI } from '../../models/slots';
import { SlotsService } from '../../services/slots.service';

@Component({
  selector: 'app-providers-list',
  standalone: true,
  imports: [NgClass],
  templateUrl: './providers-list.component.html',
  styleUrl: './providers-list.component.scss'
})
export class ProvidersListComponent {
  public slotsService = inject(SlotsService);
  public providers = toSignal<ProviderI[]>(this.slotsService.getProviders());
  isExpanded = false;

  setProvidersFilter(provider: string) {
    this.slotsService.currentFilter.set({ type: FilterTypes.PROVIDER, value: provider });
  }
}
