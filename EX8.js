let altura = document.querySelector("#altura");
let sexo = document.querySelector("#sexo");
let botao = document.querySelector("#botao");
let resultados = document.querySelector("#resultados");

function peso(){
    let valordaaltura = Number(altura.value);
    let genero = String(sexo.value).toLocaleLowerCase();
        if (genero === 'masculino'){
            let pesoideal = (72.7*valordaaltura)-58;
            resultados.innerHTML = pesoideal.toFixed(2);
        }else if(genero === 'feminino'){
            let pesoideal = (62.1*valordaaltura)-44.7;
            resultados.innerHTML = pesoideal.toFixed(2);
        }else{
            resultados.innerHTML = 'Verifique os dados digitados.'
        }
}

botao.onclick = function(){
    peso();
}