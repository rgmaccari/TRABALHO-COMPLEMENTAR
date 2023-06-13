let sm = document.querySelector("#sm");
let botao = document.querySelector("#botao");
let resultados = document.querySelector("#resultados");

function novocredito(){
    let saldomedio = Number(sm.value);
    let vinte = 20/100;
    let trinta = 30/100;
    let quarenta = 40/100;
        if (saldomedio <= 200){
            resultados.innerHTML = 'Ainda não possuímos uma oferta de crédito para você.';
        }else if (201 < saldomedio && saldomedio < 400){
            let credito = saldomedio*vinte;
            resultados.innerHTML = 'Seu crédito é de: R$'+credito;
        }else if (401 < saldomedio && saldomedio < 600){
            let credito = saldomedio*trinta;
            resultados.innerHTML = 'Seu crédito é de: R$'+credito;
        }else{
            let credito = saldomedio*quarenta;
            resultados.innerHTML = 'Seu crédito é de: R$'+credito;
        }
}

botao.onclick = function(){
    novocredito();
}