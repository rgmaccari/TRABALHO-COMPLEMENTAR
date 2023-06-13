let ladoum = document.querySelector("#ladoum");
let ladodois = document.querySelector("#ladodois");
let ladotres = document.querySelector("#ladotres");
let botao = document.querySelector("#botao");
let resultados = document.querySelector("#resultados");

function triangulos(){
    let l1 = Number(ladoum.value);
    let l2 = Number(ladodois.value);
    let l3 = Number(ladotres.value);
        if (l1 + l2 > l3 && l2 + l3 > l1 && l1 + l3 > l2){
        if (l1 === l2 && l2 === l3){
            resultados.innerHTML = "É um triângulo equilátero.";
        }else if (l1 === l2 || l1 === l3 || l2 === l3) {
            resultados.innerHTML = "É um triângulo isósceles.";
        }else {
            resultados.innerHTML = "É um triângulo escaleno.";
        }
        }else{
        resultados.innerHTML = "Não forma um triângulo.";
        };
}


botao.onclick = function(){
    triangulos();
}