import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  // il componente rappresenta una riga (<tr>) della tabella
  selector: 'tr[app-studente]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './studente.html',
  styleUrl: './studente.css',
})
export class Studente {
  @Input() studId!: number;
  @Input() nome!: string;
  @Input() classe!: string;
  @Input() mediaVoti!: number;

  @Output() remove = new EventEmitter<number>();

  mostraMedia = false;

  toggleMedia() {
    this.mostraMedia = !this.mostraMedia;
  }

  removeClick() {
    this.remove.emit(this.studId);
  }
}
