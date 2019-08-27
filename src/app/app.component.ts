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
    { activo: true, nombre: 'Colombia', cercano: 1 },
    { activo: true, nombre: 'Brasil',  cercano: 1},
    { activo: true, nombre: 'Argentina', cercano: 1 },
    { activo: false, nombre: 'Polonia' , cercano: 2,},
    { activo: false, nombre: 'Alemania' , cercano: 3 },
    { activo: true, nombre: 'Francia' , cercano: 2 }
  ]
  lat:number = 51.678418;
  lng:number = 7.809007; 
}
