
let botaododininho = document.getElementById("botaododininho")
botaododininho.addEventListener("click", () => {

})
const ifood = new Promise((resolve, reject) => {
    console.log("Pedido aguardando confirmação")
    const estado = true;
    setTimeout(() => {
        if (estado){
            resolve("Seu ganho foi de");
        }else{
            reject("ops estamos sem queijo");
        }
    }, 5000); 
}
);

ifood
    .then(msg => console.log("Sucesso: ", msg))
    .catch(erro => console.log("Erro: ", erro))
    .finally(() => console.log("Operação finalizada!"))

