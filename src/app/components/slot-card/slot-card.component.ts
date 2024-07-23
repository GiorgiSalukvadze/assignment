import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GameI } from '../../models/slots';

@Component({
  selector: 'app-slot-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './slot-card.component.html',
  styleUrl: './slot-card.component.scss'
})
export class SlotCardComponent {
  @Input({ required: true }) slot!: GameI;
}
