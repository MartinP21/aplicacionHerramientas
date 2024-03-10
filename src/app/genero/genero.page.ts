import { Component } from '@angular/core';
import { GenderizeService } from '../genderize.service';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.page.html',
  styleUrls: ['./genero.page.scss'],
})
export class GeneroPage {
  nombre: string = ''; // Definición de la propiedad nombre
  gender: string = '';
  backgroundColor: string = '';

  constructor(private genderizeService: GenderizeService) { }

  predictGender(): void {
    this.genderizeService.getGender(this.nombre)
      .subscribe(response => {
        this.gender = response.gender;
        this.backgroundColor = this.gender === 'male' ? 'blue' : 'pink';
      });
  }
}

