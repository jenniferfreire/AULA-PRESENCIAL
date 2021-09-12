//-------- SISTEMA DE CONTAGEM DE PEÇAS --------///

// CONST tem 3 exemplos para contagem de caracteres para registro das peças
const listadepecas = [`Peças de teste`, `AB`, `peca B`]
console.log(`Quantidade de caracteres`)
// IF quando usado length, podemos contar cada caracter do index ,
// limitado pelo <= (menor ou igual a 10 caracteres).
if (listadepecas.length <=10){
   }
console.log(`As peças podem ser cadastradas.`);
// FOR está contando do index 0 
 for (let index = 0; index < listadepecas.length; index++) {
const pecaatual = listadepecas[index];
    if (pecaatual.length < 3) {
        console.log(pecaatual + `:a peça possui nome inferior a 3 caracteres e não pode ser cadastrada.`)
      } else {
          console.log(pecaatual + `:a peça pode ser cadastrada`) 
      }      
}  
console.log(`peso da peça`)

const pesodapecaemgramas = 50;
if (pesodapecaemgramas >= 100) {
       console.log(`Peso suficiente`) 
    } else {
        console.log(`Valor insuficiente`) 
    }
