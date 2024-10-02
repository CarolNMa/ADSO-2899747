/**
 * Contar numeros
* autor: Carol M
 * fecha: Lunes 15 de abril de 2024
 */

function paress(num){
    let cont= num%2==0;

    return cont;

}
function tabla(pnum){
    let numero=pnum;
    let contar;
    let par = 0;
    let impar = 0;

    while (numero<=5){
        numero= numero+1;
        contar=1

        while(contar<=5){
            let multi=numero*contar;

            if (paress(multi)) {
                console.log(numero+ " * " +contar+ " = " +multi+ " BUZZ ");
                par = par+1;

                
            }else{
                console.log(numero+ " * " +contar+ " = " +multi+ " BASS ");
                impar= impar+1;
            }
            contar = contar+1
        }
    }

    return "Los numeros que son pares son: " +par+ " Y los que son impares son:  " +impar;
    
}


/**
 * Como expresion
 */
const parExp = function(num){
    let cont= num%2==0;

    return cont;

}

const tablaExp= function(pnum){
    let numero=pnum;
    let contar, multi;
    let par = 0;
    let impar = 0;

    while (numero<5){
        numero= numero+1;
        contar=1

        while(contar<=5){
            multi=numero*contar;

            if (parExp(multi)) {
                console.log(numero+ " * " +contar+ " = " +multi+ " BUZZ ");
                par = par+1;

                
            }else{
                console.log(numero+ " * " +contar+ " = " +multi+ " BASS ");
                impar= impar+1;
            }
            contar = contar+1
        }
    }

    return "Los numeros que son pares son: " +par+ " Y los que son impares son:  " +impar;
}