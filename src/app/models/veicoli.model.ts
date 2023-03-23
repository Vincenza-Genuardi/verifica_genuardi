export class Veicolo{
    public id: number;
    public modello: string;
    public marca: string;
    public prezzo: number;
    public velocitamax: number;
  
    constructor(id: number, modello: string, marca: string, prezzo: number, velocitamax: number) {
      this.id = id;
      this.modello = modello;
      this.marca = marca;
      this.prezzo = prezzo;
      this.velocitamax = velocitamax;
    }
    
    
}