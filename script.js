"use strict";
//interface funciona igual al type
// type Programador = {
//     nombre:string,
//     tecnologias:string[],
//     estudia?: boolean
// }
let dev = {
    nombre: "nayn",
    tecnologias: ["react", "node"],
    estudia: true
};
// corroborar que el valor que le agregamos a la propiedad simpre sea el mismo que tipamos en el Type personalizado, otra opcion es agregar con "| "tipo de dato""
let dev2 = {
    name: "fede",
    tech: ["cobol"],
    // estudia: null
    lastname: "hla",
    recibido: false
};
function enviarCV(programador) {
    console.log(`Este Curriculum es de ${programador.nombre}`);
}
enviarCV(dev);
