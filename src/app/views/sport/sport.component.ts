import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  template: `<p>sport works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SportComponent {}
