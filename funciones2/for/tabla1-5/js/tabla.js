
function pares(num){
    let cont= num%2==0;

    return cont;

}

function tabla(pnum){
    let numero=pnum;
    let contar, multi;
    let par=0;
    let impar=0;

    for (numero=1; numero<=3; numero++){
     
        for(contar=1; contar<=3; contar++){
            multi=numero*contar;
            
            if (pares(multi)) {
                console.log(numero+ " * " +contar+ " = " +multi+ " BUZZ ");
                par = par+1;

                
            }else{
                console.log(numero+ " * " +contar+ " = " +multi+ " BASS ");
                impar= impar+1;
            }
            
        }
        contar = contar+1
    }

    return "Los numeros que son pares son: " +par+ " Y los que son impares son:  " +impar;
    
}



/**
 * Como expresion
 */

function parExp(num){
    let cont= num%2==0;

    return cont;

}

const tablaExp= function(pnum){
    let numero=pnum;
    let contar, multi;
    let par = 0;
    let impar = 0;

    for (numero=1; numero<=5; numero++){
        contar=1

        for(contar=1; contar<=5; contar++){
            multi=numero*contar;

            if (parExp(multi)) {
                console.log(numero+ " * " +contar+ " = " +multi+ " BUZZ ");
                par = par+1;

                
            }else{
                console.log(numero+ " * " +contar+ " = " +multi+ " BASS ");
                impar= impar+1;
            }
            
        }
        contar = contar+1
    }

    return "Los numeros que son pares son: " +par+ " Y los que son impares son:  " +impar;
  
}