/**
 * Calculo de edad de 3 personas
 * autor: Carol M
 * fecha: Martes 02 de abril de 2024
 */


function calcularEdad(anioActual, anioNacimiento) {
    let total= anioActual - anioNacimiento;
    return total;
}

function edades(anioActual, anioNac1, anioNac2, anioNac3) {
    let edad1 = calcularEdad(anioActual, anioNac1);
    let edad2 = calcularEdad(anioActual, anioNac2);
    let edad3 = calcularEdad(anioActual, anioNac3);

    let promedio = (edad1+edad2 + edad3)/3;

    console.log("El promedio de edades es: " + promedio);

    if (promedio > 18) {
        console.log("Son mayores de edad");
    } else {
        console.log("Son menores de edad");
    }
}


/**
 * Como expresion
 */

const calcularedadExp = function(anioActual, anioNacimiento) {
    let total= anioActual - anioNacimiento;
    return total;
}

const edadesExp = function(anioActual, anioNac1, anioNac2, anioNac3) {
    let edad1 = calcularedadExp(anioActual, anioNac1);
    let edad2 = calcularedadExp(anioActual, anioNac2);
    let edad3 = calcularedadExp(anioActual, anioNac3);

    let promedio = (edad1+edad2 + edad3)/3;

    console.log("El promedio de edades es: " + promedio);

    if (promedio > 18) {
        console.log("Son mayores de edad");
    } else {
        console.log("Son menores de edad");
    }
}