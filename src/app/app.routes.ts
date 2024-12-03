import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterLink  } from '@angular/router';

/**Rutas */
import { PortafolioComponent } from "./pages/portafolio/portafolio.component";
import { AboutComponent } from "./pages/about/about.component";
import { ItemComponent } from "./pages/item/item.component";

export const routes: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'about', component: AboutComponent},
  { path: 'item/:id', component: ItemComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports:[
    RouterModule.forRoot(routes, {useHash: true}),
    RouterLink
  ],
  exports:[
    RouterModule
  ]
})

export class AppRouterModule{}
