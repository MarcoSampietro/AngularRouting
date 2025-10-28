import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StudentiService } from '../services/studenti-service';

@Component({
  selector: 'app-dettaglio-studente',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dettaglio-studente.html',
  styleUrl: './dettaglio-studente.css',
})
export class DettaglioStudente {
  studente: any;
  listaStudenti: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentiService: StudentiService
  ) {}

  ngOnInit() {
    this.listaStudenti = this.studentiService.getStudenti();

    // 🔹 ascolta i cambi di parametro nell'URL
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.caricaStudente(id);
    });
  }

  caricaStudente(id: number) {
    const trovato = this.listaStudenti.find(s => s.id === id);
    if (trovato) {
      this.studente = trovato;
    } else {
      this.router.navigate(['/pagina3']);
    }
  }

  studenteSuccessivo() {
    const currentIndex = this.listaStudenti.findIndex(s => s.id === this.studente.id);
    const nextIndex = (currentIndex + 1) % this.listaStudenti.length;
    const prossimo = this.listaStudenti[nextIndex];
    // 🔹 cambia URL → Angular aggiorna i dati grazie alla subscribe
    this.router.navigate(['/pagina3', prossimo.id]);
  }
}
