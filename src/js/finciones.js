// 1. Funciones constructora

const arrayNumbers = [2, 5, 7, 4];

const arrayPotencia = (array, potencia) => {
    return array.map((datos => Math.pow(datos, potencia)));
};
console.log(arrayPotencia(arrayNumbers, 3));