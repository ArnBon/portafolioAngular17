import { Component } from '@angular/core';
import { InfoPaginaServiceService } from '../../services/info-pagina-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  constructor(public _infoService: InfoPaginaServiceService){

  }

}
