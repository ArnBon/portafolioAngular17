import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from "./shared/footer/footer.component";
import { PortafolioComponent } from "./pages/portafolio/portafolio.component";
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { InfoPaginaServiceService } from './services/info-pagina-service.service';
import { ProductosService } from './services/productos.service';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        RouterOutlet,
        HeaderComponent,
        FooterComponent,
        PortafolioComponent,
        AboutComponent,
        ItemComponent,
        HttpClientModule,
        CommonModule


    ]
})
export class AppComponent {
  // title = 'portafolio';

  constructor(public _infoPagina: InfoPaginaServiceService,
              public _productosService: ProductosService) { }
}
