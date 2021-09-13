//------ SISTEMA DE CONTAGEM E CLASSIFICAÇÃO-----//

//  CONST tem 8 alunos na sala
const listadealunos = 8;
//   FOR está contando do index (listadealunos) começando do zero,
//   limitado a contar a quantidade existente no index, adicioando + 1 
//   para percorrer toda a "lista".
for (let index = 0; index <= listadealunos; index++) {
//  SE index for totalmente igual (===) a zero, imprimirá: "Número é zero".
  if (index === 0) 
   {
    console.log(index + ` : Número zero`);
// E SE o resto da divisão (%) do index por 2 for totalmente igual (===) a zero, imprimirá: "Número par".
   } else if  (index % 2 === 0){
        console.log(index + ` : Número par`);    
// SE NÃO imprimirá: "Número impar", pois seu resto da divisão (%) por 2 não é zero.
    } else {
            console.log(index + ` : Número ímpar`);
    }
    }