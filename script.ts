// Types personalizados

type Programador = {
    nombre:string,
    tecnologias:string[],
    estudia?: boolean
}

let programador: Programador = {
    nombre: "nayn",
    tecnologias: ["react", "node"],
    estudia: true
};

// corroborar que el valor que le agregamos a la propiedad simpre sea el mismo que tipamos en el Type personalizado, otra opcion es agregar con "| "tipo de dato""
let programador2: Programador ={
    nombre: "fede",
    tecnologias: ["cobol"],
    // estudia: null
}
console.log(programador2)