
let cliente = {
    nombre: "Tania",
    id: 4,
    saldo: 0,
    abonar: (importe) => {
        cliente.saldo += importe;
    },
    retirar: (importe) => {
        if (cliente.saldo < importe) {
            throw "Saldo insuficiente";
        }
        cliente.saldo -= importe;
    }
};

try {
    cliente.abonar(20000);
    cliente.retirar(3000);
    console.log("retiro realizado con éxito");
} catch (error) {
    console.error(error);
}