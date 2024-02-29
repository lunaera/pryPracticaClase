
let cont = 1;
const tableNumber = 6;
let resultTable = `La tabla del ${tableNumber} es:\n`

while (cont <= 10) {
    resultTable += `${tableNumber} * ${cont} = ${tableNumber * cont}\n`;
    cont++;
}
console.log(resultTable);