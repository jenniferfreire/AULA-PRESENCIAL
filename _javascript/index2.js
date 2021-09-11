var media = 4;
var faltas = 1;
if(media >=7) {
    console.log("Aprovado");
} else if (media >=5 && faltas <2) {
    console.log("Recuperação");   
} else {
    console.log("Reprovado");
}
for(let numero=1;numero <=10;numero ++){
console.log(numero);}

let x = 3;
const y = x++;
console.log(`x=${x},y=${y}`);