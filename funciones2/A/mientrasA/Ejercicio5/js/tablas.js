/**
 * Función de mostrar la tabla del 1 2 3 4 5 hasta el 5 y mostrar si son pares buzz y si son impares bazz y también cuantos pares y impares hay
 * Autor: Anibal Alvarado Andrade
 * Martes 02 de abril de 2024
 */

function tablass(ptabla){
let tabla= ptabla
let contar,multi,par,impar
        impar=0
        par=0
        while(tabla<5){
            tabla= tabla+1
            contar=1
            while(contar<=5){
                multi= tabla*contar
                if(multi % 2 == 0){
                    console.log(tabla+"*"+contar+"="+multi+"buzz")
                    par= par+1
                }else{
                    console.log(tabla+"*"+contar+"="+multi+"bass")
                    impar= impar+1
                }
                contar= contar+1
            }
        }
        return "El numero de pares es: "+par+"\n El numero de impares es: "+ impar 
}

const tablassExp=function(ptabla){
    let tabla= ptabla
    let contar,multi,par,impar
            impar=0
            par=0
            while(tabla<5){
                tabla= tabla+1
                contar=1
                while(contar<=5){
                    multi= tabla*contar
                    if(multi % 2 == 0){
                        console.log(tabla+"*"+contar+"="+multi+"buzz")
                        par= par+1
                    }else{
                        console.log(tabla+"*"+contar+"="+multi+"bass")
                        impar= impar+1
                    }
                    contar= contar+1
                }
            }
            return "El numero de pares es: "+par+"\n El numero de impares es: "+ impar+"EXP"
    }
