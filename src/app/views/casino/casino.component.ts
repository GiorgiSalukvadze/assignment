import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  template: `<p>casino works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CasinoComponent {}
