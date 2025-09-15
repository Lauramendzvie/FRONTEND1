
alert("Ola! Seja muito bem vindo ao nosso site!!")

let = prompt("qual é seu nome?");

alert("Seja bem vindo, temos o Prazer em te conhecer " + nome + " sinta se a vontade para navegar pelo nosso site");

let materia = prompt("qual a materia que voce mais gosta?");

alert(" realmente, " + materia + " é muito interessante!" );

let data = prompt(" por favor insira a data de hoje!");

alert(" obrigado, agora podemos identificar aonde nos encaixamos em seu calendário ;)")

let question = prompt("esta preparado para este novo semestre de estudos?");

if (question == "sim"){
    alert(" Que bom ver que esta animado!");
} else{
    alert(" nao se preocupe! tudo dará certo :)");
}
 
let question2 = prompt("Voce gosta de atuar na área que está atualmente?");
if (question2 == "sim"){
    alert(" Que bom! " + nome + " então está no caminho certo e se dará muito bem!");
}else{
    alert(" tudo bem, tenho certeza que se encontrará e se dará muito bem aonde quer que estiver!!");
}

alert("estamos animados com sua chegada em nosso site, gostariamos de fazer uma pesquisa rápida com voce");
let irmãos = prompt("voce possui irmãos " + nome + " ?");
alert("que legal!")
let idade = prompt("quantos anos voce tem " + nome + " ?");
if (idade <18){
    alert(" entao esta sob nossa responsabilidade pois voce é menor de idade");
}else{
    alert(" então pode ser responsavel e ter sabedoria em suas decisões pois Voce é maior de idade!");
}



let numero1 = prompt(" insira um numero ");
let numero2 = prompt(" insira um segundo numero");

let calculo = prompt(" qual resultado voce gostaria de ver? voce pode escolher entre: soma, divisão, subtração, multiplicação");
if (calculo == "soma "){
    alert( " o resultado de sua soma é: " + numero1 + numero2 );
} else if ( calculo == " divisão "){
    alert( " o resultado de sua divisão é: " + numero1/numero2 );
} else if ( calculo == " subtração "){
    alert(" o resultado de sua subtração é: " + numero1 - numero2 );
} else{
    alert(" o resultado de sua multiplicação é: " + numero1 * numero2 );
}

let nota1 = Number(prompt(" por favor insira a nota da primeira prova que deseja: "));
let nota2 = Number(prompt(" por favor insira a nota da segunda prova que deseja: "));
let nota3 = Number(prompt(" por favor insira a nota da terceira prova que deseja: "));

let conta = ( nota1 + nota2 + nota3 ) / 3;
alert(" a média aritmética de suas notas é: " + conta );


alert(" vamos ver quanto de tinta voce precisa para o local que quer pintar!!")

let largura = Number(prompt("Digite a largura da parede: "));
let altura = Number(prompt("Digite a altura da parede: "));
 
let parede = largura * altura;
 
alert("A área da parede é: " + parede + "m²");
 
if (parede >= 2){
    let tinta = Math.ceil(parede / 2);
    alert("descobrimos então que voce vai usar " + tinta + " lata(s) de tinta para pintar o lugar que quer.");
}else{
    alert("A área da parede é muito pequena, então voce só vai precisar de uma lata de tinta");
}



let arr = ["maria", "joão", "pedro", "ana"];
console.log(arr[3]);
 
let obj = {
    nome: "Maria",
    idade: 14,
    hobbies: ["pintar", "comer", "dançar"]
}
console.log(obj.nome);
console.log(obj.hobbies[1]);
 


let nome = "João";
console.log(nome[2])
 


console.log(nome.charAt(2));
 
 
let a = "a";
let b = "b";
 
console.log(a>b);
console.log(typeof(b.toString))
console.log(arr.toString());
console.log(arr.length);
console.log(nome.slice(0, 3));
console.log(nome.toLocaleLowerCase());
console.log(nome.toUpperCase());
console.log(nome.replace("ão", "a"));
 
 
let lista = "maria, joão, pedro, ana";
lista = lista.split(", "); 

console.log(lista);
 
lista = lista.join(", "); 


console.log(lista);
 



arr.push("Luiza");
console.log(arr);
 



arr.unshift("Carlos");
console.log(arr);
 



arr.pop("ana");
console.log(arr);
 



arr.shift("maria");
console.log(arr);

 



 
if (3 > 4){
    console.log("Ok");
} else if (5 > 6){
    console.log("Ok 2");
} else{
    console.log("Não ok");
}
 




let amarela = prompt("Escolha uma cor: ")
 
switch (amarela){
    case "amarelo":
        console.log("Você gosta de " + amarela + "!");
        break;
    case "azul":
        console.log("Você gosta de " + amarela + "!");
        break;
    case "verde":
        console.log("Você gosta de " + amarela + "!");
        break;
    case "vermelho":
        console.log("Você gosta de " + amarela + "!");
        break;
    default:
        console.log("Você não gosta de nenhuma dessas cores!");
        break;
}
 