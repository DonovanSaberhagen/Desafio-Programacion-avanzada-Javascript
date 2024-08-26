
import { Animal } from "./Animal.js";

export class Aguila extends Animal {
  // Constructor 
  constructor(nombre, edad, img, comentarios, sonido) {
   
    super(nombre, edad, img, comentarios, sonido);
  }

  
  chillar() {
    
    console.log(`El águila ${this.nombre} está chillando.`);
  }
}
