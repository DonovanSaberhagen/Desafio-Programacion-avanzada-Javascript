export class Animal {
    // Atributos de la clase Animal
    #nombre;
    #edad;
    #img;
    #comentarios;
    #sonido;

    // Constructor
    constructor(nombre, edad, img, comentarios, sonido) {
        this.#nombre = nombre;         
        this.#edad = edad;             
        this.#img = img;               
        this.#comentarios = comentarios; 
        this.#sonido = sonido;         
    }

    /* Getters y Setters */

    
    get nombre() {
        return this.#nombre;
    }

    
    get edad() {
        return this.#edad;
    }

   
    get img() {
        return this.#img;
    }

    
    get comentarios() {
        return this.#comentarios;
    }

    
    set comentarios(newText) {
        this.#comentarios = newText;
    }

    
    get sonido() {
        return this.#sonido;
    }
}

