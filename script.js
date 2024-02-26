"use strict";
// Class & POO
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setTicket(ticket) {
        this.ticket = ticket;
    }
    getTicket() {
        return this.ticket;
    }
    sortear() {
        return (`Para ${this.nombre} el ticket es ${this.ticket}`);
    }
}
let sorteo = new Sorteo("nayn");
sorteo.setTicket("a12d");
console.log(sorteo.getTicket());
console.log(sorteo.sortear());
