let ano = document.querySelector("#ano");
let fip = document.querySelector("#fip");
let botao = document.querySelector("#botao");
let resultados = document.querySelector("#resultados");

function taxa(){
    let fabricacao = Number(ano.value);
    let valortabela = Number(fip.value);
    let taxadosvelhos = 1/100;
    let taxadosnovos = 1.5/100;
    let calculovelhos = valortabela*taxadosvelhos;
    let calculonovos = valortabela*taxadosnovos;
        if(fabricacao > 1990){
            resultados.innerHTML = 'O imposto a ser pago é de R$'+calculonovos;
        } else{
            resultados.innerHTML= 'O imposto a ser pago é de R$ '+calculovelhos;
        }
}

botao.onclick = function(){
    taxa();
}