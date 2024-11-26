import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.scss'
})
export class PortafolioComponent {

  constructor(public _productosService: ProductosService){}


}
