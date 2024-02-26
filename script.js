"use strict";
// datos tipo booleanos
// let estudiasteJavascript: boolean = true;
// if (estudiasteJavascript) {
//     console.log("Podes seguir el curso")
// }else{
//     console.log("Primero debes estudiar")
// }
//datos tipo number
let interMiami = 11;
let fcDallas = 11;
let messi = 1;
let juegaMessi = true;
let palabras = "Holaaa";
function jugar(equipo1, equipo2, juegaMessi) {
    let motivo = "";
    if (juegaMessi) {
        equipo1 += messi;
        motivo = "porque juega mesi";
    }
    if (equipo1 > equipo2)
        console.log(`Gana inter ${motivo}`);
    if (equipo1 == equipo2)
        console.log("Empatan");
    if (equipo1 < equipo2)
        console.log("Gana Dallas");
}
jugar(interMiami, fcDallas, juegaMessi);
