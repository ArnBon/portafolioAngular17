import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';
import { InfoPaginaServiceService } from '../../services/info-pagina-service.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(public _servicio: InfoPaginaServiceService){}


  annio: number = new Date().getFullYear();

}
