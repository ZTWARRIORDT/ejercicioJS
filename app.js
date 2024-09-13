// Función flecha para determinar el numero menor
const compareNumbers = (num1, num2, num3) => {
    return new Promise((resolve, reject) => {
        if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
            reject('Mal. Porfavor ingrese un valor valido');
        }

        // identificar el menor
        let smallest = Math.min(num1, num2, num3);

        // ver si alguno de los numeros son iguales
        let equalNumbers = '';
        if (num1 === num2 || num1 === num3 || num2 === num3) {
            if (num1 === num2) {
                equalNumbers = `Numero 1 y Numero 2 son iguales: ${num1}`;
            } else if (num1 === num3) {
                equalNumbers = `Numero 1 y Numero 3 son iguales: ${num1}`;
            } else if (num2 === num3) {
                equalNumbers = `Numero 2 y Numero 3 son iguales: ${num2}`;
            }
        }

        // resultado como un objeto
        resolve({
            smallest,
            equalNumbers
        });
    });
};

//Boton clcik
document.getElementById('compareButton').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);

    compareNumbers(num1, num2, num3)
        .then(result => {
            const message = `El numero menor es: ${result.smallest}<br>${result.equalNumbers ? result.equalNumbers : 'Ningun numero es igual'}`;
            document.getElementById('result').innerHTML = message;
        })
        .catch(error => {
            document.getElementById('result').innerHTML = error;
        });
});
