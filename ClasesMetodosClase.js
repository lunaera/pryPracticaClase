class Persona {
    #nombre;
    #curp;
    #edad;

    constructor() {
        this.#nombre = "Pancracio";
        this.#curp = "XAXAXXX001";
        this.#edad = 0;
    }

    set nombre(nombre) {
        this.#nombre = nombre;
    }

    setNombre(nom) {
        this.#nombre = nom;
    }

    get nombre() {
        return this.#nombre;
    }

    set curp(curp) {
        this.#curp = curp;
    }

    get curp() {
        return this.#curp;
    }

    get edad() {
        return this.#edad;
    }

    #calcularEdad() {
        const siglo = this.#curp.at(16);
        let epoca = 2000;
        if ("0123456789".indexOf(siglo) >= 0) {
            epoca = 1900;
        }



        const anioNacimiento = epoca + parseInt(this.#curp.substring(4, 6));
        const anioActual = new Date().getFullYear();
        this.#edad = anioActual - anioNacimiento;
    }

    invocarCalculo() {
        this.#calcularEdad();
    }
}
// crear objeto
const objPersona = new Persona();
objPersona.setNombre("Emmanuel");
objPersona.curp = "GODF040705HOCNZRA4";
objPersona.invocarCalculo();
console.log(`La edad de ${objPersona.nombre} es ${objPersona.edad}`);
