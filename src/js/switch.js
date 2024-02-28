
let operador = '+';
switch (operador) {
    case '+': console.log("Se va arealizar una suma: "); break;
    case '-': console.log("Se va arealizar una resta: "); break;
    case '*': console.log("Se va arealizar una multiplicación: "); break;
    default: console.log("Error!!"); break;
}


// switch multiple
const nameFruit = "Strawberry";
switch (nameFruit) {
    case 'apple':
    case 'banana':
    case 'Strawberry':
        console.log(`${nameFruit} is a fruit`); break;
    default: console.log("is not fruit"); break;
}

//validacion de switch
const foo = 50;
switch (foo) {
    case 2: console.log(2); break;
    default: console.log("default");
    case 1: console.log(1);
}