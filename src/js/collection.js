

// Map y Set

let miMapa = new Map();

// agregar elementos al mapa

miMapa.set('clave1', 'rojo');
miMapa.set('clave2', 'negro');
miMapa.set('adress', 'Jazmines 203');
miMapa.set('clave4', 'Jazmines 203');

//console.log(miMapa.get('clave4'));

// recorrido con bucl foreach
/*
miMapa.forEach((element, clave) => {
    console.log(`${clave}: ${element}`);
});*/

// recorrido con for of

/*
for (let [clave, valor] of miMapa) {
    console.log(`${clave}: ${valor}`);
}*/

// recorrido con for y values
/*
for (let valor of miMapa.values()) {
    console.log(valor);
}*/

//========== set==================

const objSet = new Set();
objSet.add('elemento1');
objSet.add('elemento2');
objSet.add('elemento3');
objSet.add('elemento3');

// recorrido con for each
/*
objSet.forEach(element => {
    console.log(element);
})
*/

// recorrido con For of

for (let valor of objSet) {
    console.log(valor);
}