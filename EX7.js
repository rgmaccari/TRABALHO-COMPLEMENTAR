/* hotfog 11
bauru 8,50
misto quente 8
hamburger 9
cheeseburger 10
refrigerante 4,50 */
let rango = document.querySelector("#rango");
let qtd = document.querySelector("#qtd");
let botao = document.querySelector("#botao");
let resultados = document.querySelector("#resultados");

function pedido(){
    let lanche = String(rango.value).toLocaleLowerCase();/* Torna indiferente digitar maiúsculo ou minúsculo */
    let quantidade = Number(qtd.value);
    let precobauru = 8.50;
    let precocachorro = 11;
    let precocheese = 10;
    let precohamburger = 9;
    let precomisto = 8;
    let precorefri = 4.50;
        if(lanche === 'bauru'){
            let valores = precobauru*quantidade;
            resultados.innerHTML = valores;
        }else if (lanche === 'cachorro quente'){
            let valores = precocachorro*quantidade;
            resultados.innerHTML = valores;
        }else if (lanche === 'cheeseburger'){
            let valores = precocheese*quantidade;
            resultados.innerHTML = valores;
        }else if (lanche === 'hamburger'){
            let valores = precohamburger*quantidade;
            resultados.innerHTML = valores;
        }else if (lanche === 'misto quente'){
            let valores = precomisto*quantidade;
            resultados.innerHTML = valores;
        }else if (lanche === 'refrigerante'){
            let valores = precorefri*quantidade;
            resultados.innerHTML = valores;
        }else{
            resultados.innerHTML = 'Produto não encontrado! Verifique os dados e peça novamente.'
        }
}

botao.onclick = function(){
    pedido();
}