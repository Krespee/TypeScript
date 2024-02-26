// datos tipo booleanos

// let estudiasteJavascript: boolean = true;

// if (estudiasteJavascript) {
//     console.log("Podes seguir el curso")
// }else{
//     console.log("Primero debes estudiar")
// }

//datos tipo number

let interMiami: number  | null | undefined= 11
let fcDallas: number = 11

let messi: number = 1
let juegaMessi: boolean= true

let palabras: string = "Holaaa"


function jugar(equipo1:number, equipo2: number, juegaMessi: boolean):void{
    let motivo: string = ""

    if (juegaMessi) {
    equipo1 += messi
    motivo = "porque juega mesi"
    }
    if (equipo1 > equipo2) console.log(`Gana inter ${motivo}`)
    if (equipo1 == equipo2) console.log("Empatan")
    if (equipo1 < equipo2) console.log("Gana Dallas")
}

jugar(interMiami, fcDallas, juegaMessi)

