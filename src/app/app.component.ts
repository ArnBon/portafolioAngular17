import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from "./shared/footer/footer.component";
import { PortafolioComponent } from "./pages/portafolio/portafolio.component";
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';

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
        ItemComponent
    ]
})
export class AppComponent {
  title = 'portafolio';
}
