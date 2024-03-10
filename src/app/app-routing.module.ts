import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'genero',
    loadChildren: () => import('./genero/genero.module').then( m => m.GeneroPageModule)
  },
  {
    path: 'edad',
    loadChildren: () => import('./edad/edad.module').then( m => m.EdadPageModule)
  },
  {
    path: 'universidades',
    loadChildren: () => import('./universidades/universidades.module').then( m => m.UniversidadesPageModule)
  },
  {
    path: 'clima',
    loadChildren: () => import('./clima/clima.module').then( m => m.ClimaPageModule)
  },
  {
    path: 'noticia',
    loadChildren: () => import('./noticia/noticia.module').then( m => m.NoticiaPageModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./contacto/contacto.module').then( m => m.ContactoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
