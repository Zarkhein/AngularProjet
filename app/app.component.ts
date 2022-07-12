import { Component } from '@angular/core';
import { stockLivres } from '../livres';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ds';
  nbrLivre: number = 1; 
  leslivres = stockLivres; // avoir la possibilité d'utiliser d'autres données
  // code du livre sélectionné
  code: number = 1;

  
}
