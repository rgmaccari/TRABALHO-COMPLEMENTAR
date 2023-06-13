let n1 = document.querySelector("#n1");
let n2 = document.querySelector("#n2");
let n3 = document.querySelector("#n3");
let n4 = document.querySelector("#n4");
let n5 = document.querySelector("#n5");
let botao = document.querySelector("#botao");
let resultado = document.querySelector("#resultado");

function ordenar(){
    let valores = [];
/* [] (array) = coleciona elementos que serão manipulados em conjunto
variável 'vazia' */
        valores.push(parseInt(n1.value));
        valores.push(parseInt(n2.value));
        valores.push(parseInt(n3.value));
        valores.push(parseInt(n4.value));
        valores.push(parseInt(n5.value));
/* explicação no bloco de notas (textão) */
            valores.sort(function(a, b) {return b - a;});
            resultado.innerHTML = "Valores em ordem decrescente: " + valores.join(", ")+'.';
    
}

botao.onclick =  function(){
    ordenar();
}