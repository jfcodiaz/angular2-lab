import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    nombre = 'Francisco';
    nombre2 = 'frAnciCo DíAz';
    activo = true;
    arreglo = [1,2,3,4,5,6,7,8,9,10];
    PI = Math.PI;
    a:number = 0.234;
    salario:number = 1234.5;
    video = 'X4bgXH3sJ2Q';
    heroe = {
        nombre : 'Logan',
        clave  : "Wolverine",
        edad   : 500,
        direccion : {
            calle : "Primera",
            casa  : 19
        }
    }

    valorDePromesa = new Promise((resolve, reject) => {
        setTimeout(()=>resolve("Llego la data"), 3000);
    });

    fecha = new Date();

}
