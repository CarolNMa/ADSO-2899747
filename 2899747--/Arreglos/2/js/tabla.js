let matriz=[[5,10,15,20,25],
[30,35,40,45,50],
[55,60,65,70,75],
[80,85,90,95,100],
[105,110,115,120,125]];


let impar=0;
let par=0;
for (let i=0; i<matriz.length; i++){
    matriz[i] 
    for (let j=0; j<matriz[i].length; j++){
        if (matriz[i][j]%2==0){
            
            par+=matriz[i][j];
        }
        else{
            
            impar+=matriz[i][j];
        }
    }
  
}
console.log (matriz);
console.log("La suma de los numeros pares es: "+par);
console.log("La suma de los numeros impares es: "+impar);

let matriz2=[[9,18,27,36,45],
[54,63,72,81,90],
[99, 108,117,126,135],
[144,153,162,171,180],
[189,198,207,216,225]];

let imparp=0;
let parp=0;
for (let c=0; c<matriz2.length; c++){
    matriz2[c]
    for (let d=0; d<matriz2[c].length; d++){
        if (matriz2[c][d]%2==0){
            parp+=matriz2[c][d];
        }else {
        imparp+=matriz2[c][d];
    }
    }
}
console.log (matriz2);
console.log("La suma de los numeros pares es: "+parp);
console.log("La suma de los numeros impares es: "+imparp);


