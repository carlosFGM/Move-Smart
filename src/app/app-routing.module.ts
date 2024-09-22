import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { IonTabsComponent } from './ion-tabs/ion-tabs.component';
import { HomePage } from './home/home.page';
import { MenuNavComponent } from './menu-nav/menu-nav.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'start',
    component: StartComponent
  },
  {
    
    path: 'menu-nav',
    component: MenuNavComponent,  // Este componente contiene tanto el menú como las pestañas
    children: [
      {
        path: 'tabs',
        component: IonTabsComponent,
        children: [
          {
            path: 'Principal',
            loadChildren: () => import('./principal/principal.module').then((m) => m.PrincipalPageModule),
          },
          {
            path: 'Mapa',
            loadChildren: () => import('./mapa/mapa.module').then((m) => m.MapaPageModule),
          },
          {
            path: 'Rutas',
            loadChildren: () => import('./rutas/rutas.module').then((m) => m.RutasPageModule),
          },
          {
            path: '',
            redirectTo: 'Principal',
            pathMatch: 'full',
          },
        ],
      
      

      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
