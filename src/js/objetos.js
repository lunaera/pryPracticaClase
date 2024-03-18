
const objEstudiante = {
    nombre: "Emmanuel",
    calificaciones: { "Unidad 1": 2, "Unidad 2": 10, "unidad 3": 7 },
    obtenerCalificaciones: (notas) => {
        for (let clave in notas) {
            console.log(`${clave} => ${notas[clave]}`)
        }
    },
    semestre: [1, 2, 3, 4, 5, 6, 7, 8],
    getSemestre: function (array) {
        array.forEach(element => {
            console.log(element);
        });
    }
};
objEstudiante.getSemestre(objEstudiante.semestre);
objEstudiante.obtenerCalificaciones(objEstudiante.calificaciones);