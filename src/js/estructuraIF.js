
let currentDay = new Date().getDay();

const days = {
    domingo: 0,
    lunes: 1,
    martes: 2,
    miercoles: 3,
    jueves: 4,
    viernes: 5,
    sabado: 6
}

if (days.martes === currentDay) {
    console.log("Echale ganas mijo aun no acaba la semana");
}
else {
    console.log("felicidades a que costo");
}


/*
A,B,C  	VALIDA A>B Y A>C
A,C,B	VALIDA SI B>C  IMPRIME ABC SI NO ACB
B,A,C	VALIDA SI B>A Y B>C
B,C,A	VALIDA SI A>C IMPRIME BAC SI NO BCA
C,A,B	VALIDA A>B IMPRIME C,A,B SI NO CBA  (YA NO ES NO ES NECESARIO VALIDAD C>A Y C>B)
C,B,A
*/

/*
let a = 34;
let b = 56;
let c = 1;
if (a > b && a > c) {
    if (b > c) {
        console.log(a, b, c);
    }
    else {
        console.log(a, c, b);
    }
}
else if (b > a && b > c) {
    if (a > c) {
        console.log(b, a, c)
    }
    else {
        console.log(b, c, a)
    }
}
else if () {

}

*/
let a = 34;
let b = 23;
let c = 5;
const arrayNumeros = [a, b, c];
const arrayOrdenado = arrayNumeros.sort((a, b) => b - a);
console.log(arrayOrdenado.join(','));

