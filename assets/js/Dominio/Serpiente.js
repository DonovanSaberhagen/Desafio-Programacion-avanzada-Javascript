import { Animal } from "./Animal.js";


export class Serpiente extends Animal {
  // Constructor
  constructor(nombre, edad, img, comentarios, sonido) {
   
    super(nombre, edad, img, comentarios, sonido);
  }

  // Método
  sisear() {
    
    console.log(`La serpiente ${this.nombre} está siseando.`);
  }
}
