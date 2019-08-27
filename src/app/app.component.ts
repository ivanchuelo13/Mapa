import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoGenerico';
  nombre: string = '';
  paises: any = [
    { activo: true, nombre: 'Colombia' },
    { activo: true, nombre: 'Brasil' },
    { activo: true, nombre: 'Argentina' },
    { activo: false, nombre: 'Polonia' },
    { activo: false, nombre: 'Alemania' },
    { activo: true, nombre: 'Francia' }
  ]
  lat:number = 51.678418;
  lng:number = 7.809007; 
}
