import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card-busca',
  standalone: true,
  imports: [MatCardModule, MatToolbarModule, MatButtonModule],
  templateUrl: './card-busca.component.html',
  styleUrl: './card-busca.component.scss',
})
export class CardBuscaComponent {
  src: string = 'assets/img/Veneza.png';
  alt: string = 'logo-destino';
  destino: string = `
    VENEZA
  `;
  valor: string = 'R$ 5.000,00';
}
