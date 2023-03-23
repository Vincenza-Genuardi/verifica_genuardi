import { Component } from '@angular/core';
import { Veicolo } from './models/veicoli.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  veicoli : Veicolo[];
  sortedArray : Veicolo[];
  contatore : boolean;
  constructor(){
    this.contatore = false;
    this.veicoli = [
      {
          "id": 1,
          "modello": "127",
          "marca": "Fiat",
          "prezzo": 1300,
          "velocitamax": 110
  
      },
  
      {
          "id": 2,
          "modello": "Giulietta",
          "marca": "Alfa Romeo",
          "prezzo": 4000,
          "velocitamax": 180
      },
      {
          "id": 3,
          "modello": "Fiesta",
          "marca": "Ford",
          "prezzo": 1600,
          "velocitamax": 130
  
      },
      {
          "id": 4,
          "modello": "Baracca",
          "marca": "Subaru",
          "prezzo": 5500,
          "velocitamax": 170
  
      }

    ];
    this.sortedArray = this.veicoli.sort((a: Veicolo, b: Veicolo) => b.velocitamax - a.velocitamax);
    
  }
  sortedVeicoliByVelocita(): boolean{
    this.veicoli = this.veicoli.sort((a: Veicolo, b: Veicolo) => b.velocitamax - a.velocitamax);
    return false;
  }
  sortedVeicoliByPrezzo(): boolean{
    this.veicoli = this.veicoli.sort((a: Veicolo, b: Veicolo) => b.prezzo - a.prezzo);
    return false;
  }
/*   sceltaBtn(): void{
   if (this.contatore = false){
      this.contatore = false;
      this.sortedVeicoliByPrezzo();
   }else{
    this.contatore = true;
    this.sortedVeicoliByVelocita();
   };

   }; */
  }
  
 


