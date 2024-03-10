import { Component } from '@angular/core';
import { UniversidadesService } from './universidades.service';

@Component({
  selector: 'app-universidades',
  templateUrl: './universidades.page.html',
  styleUrls: ['./universidades.page.scss'],
})
export class UniversidadesPage {
  pais: string = '';
  universidades: any[] = [];

  constructor(private universidadesService: UniversidadesService) { }

  buscarUniversidades() {
    if (!this.pais) {
      console.log('Por favor, ingrese un país.');
      return;
    }

    this.universidadesService.getUniversidades(this.pais)
      .subscribe(
        data => {
          this.universidades = data;
        },
        error => {
          console.error('Error al buscar universidades:', error);
        }
      );
  }
}


