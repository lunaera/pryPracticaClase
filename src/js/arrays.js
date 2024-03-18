const arr = ["a", "b"];
arr.push(function () {
    console.log(this);
});
arr[2]();

const courses = [
    { "language": "JavaScript", "price": 20000.0 },
    { "language": "Kotlin", "price": 20000.0 },
    { "language": "Python", "price": 15000.0 },
    { "language": "Java", "price": 18000.0 },
];
const updatedCoursePrices = courses.map(course => { // se recibe cada curso { "language": "JavaScript", "price": 20000.0 }
    return course.language === "JavaScript" ? {
        ...course, // propaga hasta { "language": "JavaScript"}
        "price": 0.0// se puso una coma para poder  cambiar el valor del precio una (,) para agregar mas elementos 
        //, "otro elemento": "b" //incluso se puede agregar mas elemntos a esa fila
    } : course; // simplemente devuelve la fila del curso
})

updatedCoursePrices.forEach(element => {
    console.log(element)
});


/* 2 ejercicio dado un array de numeros enteros positivos y
negativos, utilice el metodo Math.max() y el operador de progragacion (..) para encontrar el numero mayor
*/

const ArrayNums = [34, -2, 22, -500, 12, 30, 1, -54, 40, -54, 100, 500, 10000];
const NumMax = Math.max(...ArrayNums); //toma cada valor del arrar y valida el máximo
console.log(`El número mayor en el array es: ${NumMax}`);



let range = {
    from: 1,
    to: 5,
    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },
    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    }
};
for (let num of range) {
    console.log(num);
}



