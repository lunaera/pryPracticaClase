

let currentDay = new Date().getDay();
const dayOfWeek = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "jueves",
    "viernes",
    "Sabado"
]

if (dayOfWeek[currentDay] === "Sabado") {
    console.log("Es martes");
}