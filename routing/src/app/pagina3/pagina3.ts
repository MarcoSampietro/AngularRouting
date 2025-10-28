import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Studente } from '../studente/studente';
import { StudentiService } from '../services/studenti-service';

@Component({
  selector: 'app-pagina3',
  standalone: true,
  imports: [CommonModule, FormsModule, Studente],
  templateUrl: './pagina3.html',
  styleUrl: './pagina3.css',
})
export class Pagina3 {
  studenti: any[] = [];
  filtroClasse: string = '';

  constructor(private studentiService: StudentiService) {}

  ngOnInit() {
    this.studenti = this.studentiService.getStudenti();
  }

  get studentiFiltrati() {
    if (!this.filtroClasse.trim()) return this.studenti;
    return this.studenti.filter(s =>
      s.classe.toLowerCase().includes(this.filtroClasse.trim().toLowerCase())
    );
  }

  rimuoviStudente(id: number) {
    this.studentiService.rimuoviStudente(id);
    this.studenti = this.studentiService.getStudenti();
  }
}
