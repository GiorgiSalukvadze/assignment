import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  template: `<p>live works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LiveComponent {}
