import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentiService {
  private studenti = [
    { id: 1, nome: 'Mario', classe: '5D', mediaVoti: 4.1 },
    { id: 2, nome: 'Luca', classe: '5D', mediaVoti: 7.3 },
    { id: 3, nome: 'Luigi', classe: '5D', mediaVoti: 3.9 },
    { id: 4, nome: 'Paolo', classe: '5D', mediaVoti: 7.0 },
    { id: 5, nome: 'Andrea', classe: '5D', mediaVoti: 5.7 },
  ];

  getStudenti() {
    return this.studenti;
  }

  aggiungiStudente(nome: string, classe: string, mediaVoti: number) {
    const nuovoId = this.studenti.length > 0 ? this.studenti[this.studenti.length - 1].id + 1 : 1;
    this.studenti.push({ id: nuovoId, nome, classe, mediaVoti });
  }

  rimuoviStudente(id: number) {
    this.studenti = this.studenti.filter(s => s.id !== id);
  }
}
