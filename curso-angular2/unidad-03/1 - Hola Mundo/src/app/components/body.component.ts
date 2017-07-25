import { Component } from '@angular/core';

@Component({
    selector:'app-body',
    templateUrl:'body.component.html'
})

export class BodyComponent {
    frase:any = {
        mensaje: "Un gran pode require una gran resposabilidad",
        autor: "Ben Parker"
    };
    mostrar:boolean = false;
    personajes  :string[] = ["Spiderman", "Venom", "Dr. Octopus"];
}
