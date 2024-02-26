"use strict";
// Class & POO
class Pelicula {
    proyectar() {
        console.log(`${this.nombre} está siendo proyectada`);
    }
    constructor(nombre, protagonistas, actores) {
        this.nombre = nombre,
            this.protagonistas = protagonistas,
            this.actores = actores;
    }
}
const pelicula = new Pelicula("barbie", ["barbie", "ken"], ["margon", "rian"]);
const pelicula2 = new Pelicula("oppenheimer", ["oppenheimer", "straus"], ["cillian", "robert"]);
pelicula2.proyectar();
