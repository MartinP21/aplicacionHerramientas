import { Component} from '@angular/core';
import { AgifyService } from '../agify.service';

@Component({
  selector: 'app-edad',
  templateUrl: './edad.page.html',
  styleUrls: ['./edad.page.scss'],
})
export class EdadPage {
  nombre: string = '';
  age: number = 0;
  estado: string = '';
  imagen: string = '';

  constructor(private agifyService: AgifyService) { }

  determinarEdad(): void {
    this.agifyService.getAge(this.nombre)
      .subscribe(response => {
        this.age = response.age;
        if (this.age <= 35) {
          this.estado = 'joven';
          this.imagen = 'assets/joven.jpg';
        } else if (this.age <= 60) {
          this.estado = 'adulto';
          this.imagen = 'assets/adulto.jpg';
        } else {
          this.estado = 'anciano';
          this.imagen = 'assets/anciano.jpg';
        }
      });
  }
}
