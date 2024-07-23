import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CategoriesListComponent } from '../../components/categories-list/categories-list.component';
import { ProvidersListComponent } from '../../components/providers-list/providers-list.component';
import { SlotCardComponent } from '../../components/slot-card/slot-card.component';
import { SlotCategories } from '../../const/slot-categories.const';
import { SlotsService } from '../../services/slots.service';

@Component({
  selector: 'app-slots',
  standalone: true,
  imports: [SlotCardComponent, ProvidersListComponent, CategoriesListComponent],
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlotsComponent implements OnInit {
  public slotsService = inject(SlotsService);
  public slotCategories = SlotCategories;
  private destroyRef$ = inject(DestroyRef);
  isExpanded = false;
  slots = this.slotsService.slots;

  ngOnInit() {
    this.slotsService.getCategoriesInfo().pipe(takeUntilDestroyed(this.destroyRef$)).subscribe();
  }
}
