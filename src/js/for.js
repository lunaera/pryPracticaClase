
// for tradicional

const arrayPetsName = ['nala', 'keisy', 'moli', 'dubi'];
for (let element in arrayPetsName) {
    console.log(arrayPetsName[element]);
}

// rompiendo un ciclo for
for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

// continue
for (let i = 0; i <= 10; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}


// recorrido de un objeto con for in
const animalsName = {
    nombre: "perro",
    color: "negro",
    raza: "pug"
}

for (let atribute in animalsName) {
    console.log(animalsName[atribute])

}
//for in con objeto JSON

const objFlowers = {
    "nombre": "girasol",
    "numPetalos": 400,
    "color": "amarillo"
};

for (let clave in objFlowers) {
    console.log(clave + "=>" + objFlowers[clave]);
}


// for of (recorridos)

const candies = ["looli pop", "motita", "bola", "bubaloo", "halls black"];
for (let index of candies) {
    console.log(index);
}

// for of en mapa
let contries = new Map();
contries.set("MX", "México");
contries.set('USA', "Estados unidos");
contries.set("ES", "España");
for (let [clave, valor] of contries) {
    console.log(clave, valor);
}


const prefijos = ["super", "spider", "ant", "iron"];
const sufijo = "man";
const superheroes = prefijos.map(prefijo => prefijo + sufijo);
console.log(superheroes);

// map con phyton = diccionarios

// for of con SET
const partidosPoliticos = new Set();
partidosPoliticos.add("PRI");
partidosPoliticos.add("MORENA");
partidosPoliticos.add("PAN");
for (let valor of partidosPoliticos) {
    console.log(valor);
}



const arrayNumber = [2, 4, 6, 12, 5];
const multiplicador = 2;
const resoult = arrayNumber.map(function (values) {
    return values * multiplicador;
})

console.log(resoult);