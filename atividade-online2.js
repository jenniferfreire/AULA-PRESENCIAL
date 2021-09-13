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
let datadoevento = (22+'/'+09+'/'+2021);
let listadepart = ["Participante 1","Participante 2","Participante 3","Participante 4","Participante 5","Participante 6","Participante 7","Participante 8"];
let nomeevento = '"Como a linguagem Python máximiza seu trabalho?"';
let listadepale = ["Palestrante 1", " Palestrante 2"];

////      VÁRIAVEIS DATA   ////

let data = new Date();
let dia = data.getDate();                         // 1-31
let mes = data.getMonth();                        // 0-11 (zero=janeiro)
let ano4 = data.getFullYear();                    // 4 dígitos
let str_data = dia + '/' + (mes) + '/' + ano4;


////     COMANDOS      ////

// Solicitando o NOME do evento

console.log(`Digite o nome do evento: ` + nomeevento);

// ----------------- Solicitando DATA do evento ------------------ //

console.log(`Digite a data do evento: ` + datadoevento);

let evento = true == datadoevento >= str_data

switch (evento) {
    case true:
    console.log(`Evento agendado.`)
        break;
    default: 
    console.log(`Data inválida.`)     
        return console.log(`Digite outra data para o evento:`)
        break;
}        

// ------------------- Solicitando valor IDADE ------------------ //

console.log(`Digite sua idade: ` + idade);

let idade1 = true == idade >= 18;

switch (idade1) {
    case true:
        console.log(`Prosseguir com cadastro.`)
        break;  
    default:
        console.log(`Idade insuficiente. Cadastro não permitido.`)
        return
        break;
}
    
// ------------ Solicitando nome do PALESTRANTE ----------------- //     

console.log(`Insira o nome do(s) palestrante(s): `);
    console.log(`Palestrantes do evento:`);
        console.log(listadepale);

// ----------- Solicitando nome do PARTICIPANTE ----------------- // 

console.log(`Insira o nome dos participantes:`);
    console.log(`Participantes do evento:`);
        console.log(listadepart);   

let participantes = true == listadepart.length <= 100;

switch (participantes) {
    case true:
        console.log(`Cadastro realizado com sucesso.`)        
        break;  
    default:
        console.log(`Cadastro não permitido. Limite de participantes exedido.`)
        break;        
}