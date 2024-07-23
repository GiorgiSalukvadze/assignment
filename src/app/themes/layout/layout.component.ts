import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarItems } from '../../const/navbar.const';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, NgClass],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  navbarItems = NavbarItems;
}
