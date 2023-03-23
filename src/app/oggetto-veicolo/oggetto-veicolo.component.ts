import { Component, Input } from '@angular/core';
import { Veicolo } from '../models/veicoli.model';

@Component({
  selector: 'app-oggetto-veicolo',
  templateUrl: './oggetto-veicolo.component.html',
  styleUrls: ['./oggetto-veicolo.component.css']
})
export class OggettoVeicoloComponent {
  @Input() veicolo !: Veicolo;
}
