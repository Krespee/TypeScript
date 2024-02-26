// Class & POO

    class Pelicula{
        nombre?: string;
        protagonistas?:string[];
        actores?: string[];

        proyectar():void{
            console.log(`${this.nombre} está siendo proyectada`)
        }

        constructor(nombre: string, protagonistas:string[], actores:string[]){
            this.nombre = nombre,
            this.protagonistas = protagonistas,
            this.actores = actores
        }
    }


const pelicula = new Pelicula ("barbie", ["barbie", "ken"], ["margon", "rian"])
const pelicula2 = new Pelicula ("oppenheimer", ["oppenheimer", "straus"], ["cillian", "robert"])
pelicula2.proyectar()