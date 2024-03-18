

class Medico {
    #nombre;
    #especialidad;
    #area;
    carrera;

    constructor() {
        this.#nombre = "Jaime";
        this.#especialidad = "Dentista";
        this.#area = "Infatil";
        this.carrera = "Medicina general";
    }

    getInformation() {
        return this.#nombre + " " + this.#especialidad;
    }

    getCarrera() {
        return this.carrera;
    }

}

const objMedico = new Medico();
console.log(objMedico.getInformation());
console.log(objMedico.getCarrera());
