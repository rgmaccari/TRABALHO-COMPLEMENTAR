let cargo = document.querySelector("#cargo");
let salario = document.querySelector("#salario");
let botao = document.querySelector("#botao");
let resultados = document.querySelector("#resultados");

function finalmenteemchefia(){
    let funcao = Number(cargo.value);
    let soldo = Number(salario.value);
    let dez = 10/100;
    let vinte = 20/100;
    let trinta = 30/100;
    let quarenta = 40/100;
        if (funcao === 101){
            let aumentodesalario = soldo*dez;
            let novosalario = soldo+aumentodesalario;
            resultados.innerHTML = 
            'Cargo: Gerente;<br>'+
            'Antigo salário: R$'+soldo+';<br>'+
            'Aumento: R$'+aumentodesalario+';<br>'+
            'Novo salário: R$'+novosalario+'.';
        }else if (funcao === 102){
            let aumentodesalario = soldo*vinte;
            let novosalario = soldo+aumentodesalario;
            resultados.innerHTML =
            'Cargo: Engenheiro;<br>'+
            'Antigo salário: R$'+soldo+';<br>'+
            'Aumento: R$'+aumentodesalario+';<br>'+
            'Novo salário: R$'+novosalario+'.';
        } else if (funcao === 103){
            let aumentodesalario = soldo*trinta;
            let novosalario = soldo+aumentodesalario;
            resultados.innerHTML =
            'Cargo: Técnico;<br>'+
            'Antigo salário: R$'+soldo+';<br>'+
            'Aumento: R$'+aumentodesalario+';<br>'+
            'Novo salário: R$'+novosalario+'.';
        } else{
            let aumentodesalario = soldo*quarenta;
            let novosalario = soldo+aumentodesalario;
            resultados.innerHTML = 
            'Cargo: Outros;<br>'+
            'Antigo salário: R$'+soldo+';<br>'+
            'Aumento: R$'+aumentodesalario+';<br>'+
            'Novo salário: R$'+novosalario+'.';
        }
}

botao.onclick = function(){
    finalmenteemchefia();
}