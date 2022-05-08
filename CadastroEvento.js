
//setando data do evento
let dataAtual1 = 01/05/2022;
let dataEvento1 = 25/06/2022;

if (dataEvento1 >= dataAtual1){
console.log("Data permitida");
var test1 = 0

}else {


    console.log("Data invalida");
    var test1 = 0
}

//idade participante
let idadeDoParticipante = 26;


if (idadeDoParticipante >=18){
    console.log("Idade permitida");
    var test2 = 0

}else{
    console.log("Idade não permitida!!!");
    var test2 = 1

}

//lista de participantes
listaParticipantes = ["Gilson","Ariane","Luisa","Mario","Rodson"];
listaPalestrantes = ["Ademir","Lucia"];

let numeroParticipantes = 5;

if (numeroParticipantes <=100){
console.log("Cadastro permitido, limite não excedido");
var test3 = 0

}else {
    console.log("Cadastro não permitido, limite excedido");
    var test3 = 1
}

//exibindo lista

listaParticipantes = ["Gilson","Ariane","Luisa","Mario","Rodson"];
listaPalestrantes = ["Ademir","Lucia"];

console.log("Inscritos: " + listaParticipantes);
console.log("Palestrantes: " + listaPalestrantes);


//condição para cadastro OK. 
if (test1 == "0" && test2 == "0" && test3 == "0") {

    console.log("Cadastro Realizado com Sucesso");
    
}else {

    console.log("Cadastro NÃO realizado, revise seus dados");
}
