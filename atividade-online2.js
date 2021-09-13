//* ------ SISTEMA DE CADASTRO DE EVENTOS ------- *//

// O programa tem como objetivo o cadastramento de eventos de forma simples
// Solicitando:
// - nome do evento
// - data do evento
// - idade do palestrante, sendo que, apenas > 18 podem cadastrar um evento
// - lista de palestrante(S)
// - lista de participantes, sendo que, apenas podem ser listas até 100 participantes

////     VARIÁVEIS    ////

let idade = 22;
let data = new Date(15/09/2021);
let datadoevento = 22/09/2021;
let listadepart = ["Participante 1"," Participante 2"," Participante 3"," Participante 4"];
let nomeevento = 'Como a linguagem Python máximiza seu trabalho?';
let listadepale = ["Palestrante 1", " Palestrante 2"," Palestrante 3"];

////     COMANDOS      ////

// Solicitando o NOME do evento


console.log(`Digite o nome do evento: ` + nomeevento);

// Solicitando DATA do evento

console.log(`Digite a data do evento: ` + datadoevento);
    if (datadoevento >= data) {
        console.log(`Evento agendado.`)
            } else {
                console.log(`Data inválida.`)
            }

// Solicitando valor IDADE

console.log(`Digite sua idade: ` + idade);      
    if (idade >= 18){
        console.log(`Prosseguir com cadastro.`)
            } else {
                console.log(`Idade insuficiente. Cadastro não permitido.`)
            }
// Solicitando nome do PALESTRANTE     

console.log(`Insira o nome do(s) palestrante(s): `);
    console.log(`Palestrantes do evento: ` + listadepale)

// Solicitando nome do PARTICIPANTE 

console.log(`Insira o nome dos participantes: `);
    console.log(`Participantes do evento: `+ listadepart)
        if (listadepart.length <= 100){
        console.log(`Cadastro realizado com sucesso.`)
            } else {
                console.log(`Cadastro não permitido. Limite de participantes exedido.`)
            }
