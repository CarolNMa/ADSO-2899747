let bingo=[];

let iteracion1;
let iteracion2;
let contador=0;


for (iteracion1=0;iteracion1<5;iteracion1++){
    let interno=[];
    for (iteracion2=0;iteracion2<5;iteracion2++){
        contador=contador+1;
        interno[iteracion2]=contador*2;
    }
    bingo[iteracion1]=interno;
}
console.log(bingo);





