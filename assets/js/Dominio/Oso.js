import { Animal } from "./Animal.js";

// Clase
export class Oso extends Animal {
  // Constructor 
  constructor(nombre, edad, img, comentarios, sonido) {
   
    super(nombre, edad, img, comentarios, sonido);
  }

  
  gruñir() {
    
    console.log(`El oso ${this.nombre} está gruñendo.`);
  }
}
