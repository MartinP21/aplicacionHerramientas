import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Genero', url: '/genero', icon: 'people' },
    { title: 'Edad', url: '/edad', icon: 'card' },
    { title: 'Universidades', url: '/universidades', icon: 'school' },
    { title: 'Clima', url: '/clima', icon: 'cloudy-night' },
    { title: 'Noticia', url: '/noticia', icon: 'newspaper' },
    { title: 'Contacto', url: '/contacto', icon: 'person' },
  ];

}
