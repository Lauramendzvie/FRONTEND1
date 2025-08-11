
// Loop´s
// 3 condições - contador, condição de saída e iterador
 
// for
// for (incialização; condição-saída; expressão-final) {
//     // bloco de código
// }
let i = 0;

let cats = ["laranja", "malhado", "preto e branco"];
let info = "cores de gatinhos: ";
 
for (let i = 0; i < cats.length; i++) {
    info += cats[i] + ", ";
}
 
console.log(info);

// proximo

while (i < cats.length){
    if ( i == cats.length - 1){
        info += cats[i + "."];
    } else{
        info += cats[i] + ",";
    }
    i++;
}

// Em javaScript, uma função é um bloco de código reutilizavel que pode ser executado quando chamado
// para usar uma função, voce deve declará-la e depois chamá-la pelo nome

function hellou(){
    alert("Helloooouuu");
}

hellou();

// funções anonimas são funções que nao recebem nomes, que sao executadas no momento da executação, e que não sera chamada em outra parte do aplicativo
// normalmente sao declaradas junto a uma variavel


let soma = function( n1, n2){
    return n1+n2;
    
}
alert(soma(2,3));
let helou = function(){
    console.log("olaarrr");
}
helou();

// ARROW FUNCTION
// em termos simples, uma arrow function é uma forma concisa de escrever uma função em JavaScript. Ela otimiza a escrita do seu código, deixando o mais limpo, enxuto e aumentando a legibilidade (há controversias)

let somaArrow = (n1, n2) =>{
    return n1 + n2
}
console.log(somaArrow(2, 3));

// A R V O R E DOM 
// CONJUNTO DE OBJETOS QUE SÃO INTERPRETADOS QUANDO MANIPULAMOS UMA APLICAÇÃO WEB
//ela se baseia em uma arvore 
// com a árvore dom nós conseguimsos alterar diversos elementos HTML e CSS usando a programação javascript

// um dos grandes responsaveis por isso tudo é o objeto document que é responsavel por conceder ao código JavaScript todo o acesso a árvore dom do navegador web

//portanto qualquer coisa criada pleo navegador web no modelo da pagina web podera ser acessado atraves do objeto JavaScript document

// dinamismo! a arvore dom pode permitir que voce manipule a estrutura e o conteudo da sua pagina web em tempo real, sem recarregar a página
// interação!! permite criar interações complexas com o usuario, utilizando eventos e manipuladores de evento

// personalização!! permite modificar o estilo e a aparencia da sua pagina web de acordo com as necessidades do usuariox


//exemplo prático
