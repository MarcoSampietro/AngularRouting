import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  // se usi il pattern <tr> come riga della tabella:
  selector: 'tr[app-studente]',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './studente.html',
  styleUrl: './studente.css',
})
export class Studente {
  @Input() id!: number;        // <— usa "id"
  @Input() nome!: string;
  @Input() classe!: string;
  @Input() mediaVoti!: number;

  @Output() remove = new EventEmitter<number>();

  mostraMedia = false;

  toggleMedia() { this.mostraMedia = !this.mostraMedia; }
  removeClick() { this.remove.emit(this.id); }
}
