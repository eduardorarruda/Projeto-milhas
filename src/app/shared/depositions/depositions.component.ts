import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-depositions',
  standalone: true,
  imports: [MatCardModule, MatToolbarModule, MatButtonModule],
  templateUrl: './depositions.component.html',
  styleUrl: './depositions.component.scss',
})
export class DepositionsComponent {
  src: string = 'assets/img/List item/Building Blocks/Avatar1-1.png';
  alt: string = 'avatar';
  depoimento: string = `
    Recomendo fortemente a agência de viagens Jornada.
    Eles oferecem um serviço personalizado e de alta qualidade
    que excedeu minhas expectativas em minha última viagem.
  `;
  autoria: string = 'Mariana Faustino';
}
