import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlotCategories, SlotCategoriesEnum } from '../../const/slot-categories.const';
import { FilterTypes } from '../../models/slots';
import { SlotsService } from '../../services/slots.service';

@Component({
  selector: 'app-categories-list',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.scss'
})
export class CategoriesListComponent {
  public slotsService = inject(SlotsService);
  public slotCategories = SlotCategories;

  setCategoryFilter(category: SlotCategoriesEnum) {
    this.slotsService.currentFilter.set({ type: FilterTypes.CATEGORY, value: category });
  }
}
