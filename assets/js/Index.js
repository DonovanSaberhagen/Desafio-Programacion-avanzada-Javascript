import { Leon } from "./Dominio/Leon.js";
import { Lobo } from "./Dominio/Lobo.js";
import { Oso } from "./Dominio/Oso.js";
import { Serpiente } from "./Dominio/Serpiente.js";
import { Aguila } from "./Dominio/Aguila.js";

// Función autoejecutable IIFE
(() => {
  
  document.getElementById("btnRegistrar").addEventListener("click", () => {
    
    const nombre = document.getElementById("animal").value;
    const edad = document.getElementById("edad").value;
    const comentarios = document.getElementById("comentarios").value;

    
    if (!nombre || !edad || !comentarios) {
      
      alert("Por favor, complete todos los campos");
      return;
    }
    
    let imgPath;
   
    let animal;

    
    switch (nombre) {
      case "Leon":
        imgPath = "./assets/imgs/Leon.png";
       
        animal = new Leon(nombre, edad, imgPath, comentarios);
       
        break;
      case "Lobo":
        imgPath = "./assets/imgs/Lobo.jpg";
        animal = new Lobo(nombre, edad, imgPath, comentarios);
        break;
      case "Oso":
        imgPath = "./assets/imgs/Oso.jpg";
        animal = new Oso(nombre, edad, imgPath, comentarios);
        break;
      case "Serpiente":
        imgPath = "./assets/imgs/Serpiente.jpg";
        animal = new Serpiente(nombre, edad, imgPath, comentarios);
        break;
      case "Aguila":
        imgPath = "./assets/imgs/Aguila.png";
        animal = new Aguila(nombre, edad, imgPath, comentarios);
        break;
      default:
        alert("Animal no reconocido");
        return;
    }

    
    fetchImageAndAddToTable(animal);
   
    resetFormulario();
  });


  async function fetchImageAndAddToTable(animal) {
    try {
      
      const response = await fetch(animal.img);
     
      if (!response.ok) {
        throw new Error("La respuesta no fue correcta");
      }
      
      const blob = await response.blob();
      
      const objectURL = URL.createObjectURL(blob);

      
      agregarAnimalATabla(animal, objectURL);
    } catch (error) {
      
      console.error("Hubo un problema al cargar la imagen:", error);
      alert("Ocurrió un problema al cargar la imagen del animal. Por favor, intente de nuevo.");
    }
  }

  
  function agregarAnimalATabla(animal, objectURL) {
    
    const tabla = document.getElementById("Animales");
    
    tabla.innerHTML += `
            <div class="card m-2">
                <img src="${objectURL}" class="card-img-top" alt="${animal.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${animal.nombre}</h5>
                    <p class="card-text">Edad: ${animal.edad}</p>
                    <p class="card-text">${animal.comentarios}</p>
                    <button onclick="animal.reproducirSonido()" class="btn btn-primary">Reproducir Sonido</button>
                </div>
            </div>
        `;
  }

  // Función para limpiar el formulario después de registrar un animal
  function resetFormulario() {
    
    document.getElementById("animal").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("comentarios").value = "";
  }

  
  window.mostrarModal = function (nombre, edad, img, comentarios) {
    
    const modalBody = document.querySelector(".modal-body");
   
    modalBody.innerHTML = `
            <img src="${img}" class="img-fluid" alt="${nombre}">
            <p>${comentarios}</p>
        `;
  };
})();
