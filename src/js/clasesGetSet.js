

class Medico {
    #nombre;
    #especialidad;
    #area;
    #calidadServicio;

    constructor(especialidad, calidad) {
        this.#nombre = "Pedrito";
        this.#especialidad = especialidad;
        this.#area = "Tercera edad";
        this.#calidadServicio = calidad;
    }

    get nombre() {
        return this.#nombre;
    }

    get especialidad() {
        return this.#especialidad;
    }

    get calidadDeServicio() {
        return '🦷'.repeat(this.#calidadServicio);
    }

    set area(area) {
        this.#area = area;
    }

    get area() {
        return this.#area;
    }

    getCalcularArea() {
        //
    }
}

const objMedico = new Medico("Odontólogo", 5);
console.log(objMedico.nombre);
console.log(`La calidad del servicio es: ${objMedico.calidadDeServicio}`)
console.log(getCalcularArea());