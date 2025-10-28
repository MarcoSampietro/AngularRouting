import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { StudentiService } from '../services/studenti-service';

@Component({
  selector: 'app-dettaglio-studente',
  imports: [RouterLink],
  templateUrl: './dettaglio-studente.html',
  styleUrl: './dettaglio-studente.css',
})

export class DettaglioStudente {
  studente: any;
  constructor(
  private route: ActivatedRoute,
  private router: Router,
  private studentiService: StudentiService) {}
  ngOnInit() {
  //prendo l'id dell'URL e lo salvo nella variabile id
  const id = Number(this.route.snapshot.paramMap.get('id'));
  //cerco lo studente con id = id
  const listaStudenti = this.studentiService.getStudenti();
  let trovato = false;
  for (let i = 0; i < listaStudenti.length; i++) {
  if (listaStudenti[i].id === id) {
  this.studente = listaStudenti[i];
  trovato = true;
  break;
  }
  }
  if (!trovato) {
  this.router.navigate(['/pagina3']);
  }
  }
}