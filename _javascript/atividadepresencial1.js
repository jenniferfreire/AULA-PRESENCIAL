const listadepecas = [`pecasdeteste`, `AB`, `peca B`]
console.log(`Quantidade de caracteres`)
if (listadepecas.length <=10){
   }
console.log(`As peças podem ser cadastradas.`);
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
