import { Animal } from "./Animal.js";


export class Leon extends Animal {
  // Constructor
  constructor(nombre, edad, img, comentarios, sonido) {
   
    super(nombre, edad, img, comentarios, sonido);
  }

  // Método 
  rugir() {
   
    console.log(`El león ${this.nombre} está rugiendo.`);
  }
}
