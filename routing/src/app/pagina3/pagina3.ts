import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Studente } from '../studente/studente';
import { StudentiService } from '../services/studenti-service';

@Component({
  selector: 'app-pagina3',
  standalone: true,
  imports: [CommonModule, Studente],
  templateUrl: './pagina3.html',
  styleUrl: './pagina3.css',
})
export class Pagina3 {
  studenti: any[] = [];
  constructor(private studentiService: StudentiService) {}
  ngOnInit() { this.studenti = this.studentiService.getStudenti(); }

  rimuoviStudente(id: number) {
    this.studentiService.rimuoviStudente(id);
    this.studenti = this.studentiService.getStudenti();
  }
}
