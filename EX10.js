let nivel = document.querySelector("#nivel");
let horasaula = document.querySelector("#horasaula");
let botao = document.querySelector("#botao");
let resultados = document.querySelector("#resultados");

function salario(){
    let grau = String(nivel.value);
    let jornada = Number(horasaula.value);
        if (grau === '1'){
            let soldo = 12*jornada*4.5;
            resultados.innerHTML = 'A receber: R$'+soldo;
        }else if (grau === '2'){
            let soldo = 17*jornada*4.5;
            resultados.innerHTML = 'A receber: R$'+soldo;
        }else if (grau === '3'){
            let soldo = 25*jornada*4.5;
            resultados.innerHTML= 'A receber: R$'+soldo;
        }else{
            resultados.innerHTML = 'Verifique os dados digitados.'
        }
}
botao.onclick = function(){
    salario();
}