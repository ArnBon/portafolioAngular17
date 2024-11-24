import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from "./shared/footer/footer.component";
import { PortafolioComponent } from "./pages/portafolio/portafolio.component";
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { InfoPaginaServiceService } from './services/info-pagina-service.service';


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

    ]
})
export class AppComponent {
  // title = 'portafolio';

  constructor(public _infoPagina: InfoPaginaServiceService){ }
}
