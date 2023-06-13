let valorinteiro = document.querySelector("#valorinteiro");
let botao = document.querySelector("#botao");
let resultados = document.querySelector("#resultados");

function dichavar() {
    let valor = parseInt(valorinteiro.value);/* parseint pega so o numero inteiro = nao tem necessidade de digitar 'Number" */
    let notas100 = Math.floor(valor / 100);/* divide por 100 e arredonda pra baixo */
    let valorRestante = valor - notas100 * 100;/* subtrai para saber o que sobrou */
    let notas50 = Math.floor(valorRestante / 50);/* divide o restante por 50 e arredonda pra baixo */
    valorRestante -= notas50 * 50;/* atualizar o valor restante */
    let notas10 = Math.floor(valorRestante / 10);/* mesmo processo */
    valorRestante -= notas10 * 10;
    let notas5 = Math.floor(valorRestante / 5);
    valorRestante -= notas5 * 5;
    let notas1 = valorRestante;
  
    resultados.innerHTML =
      "Valor lido: " + valorinteiro.value + "<br>" +
      "Notas de 100: " + notas100 + "<br>" +
      "Notas de 50: " + notas50 + "<br>" +
      "Notas de 10: " + notas10 + "<br>" +
      "Notas de 5: " + notas5 + "<br>" +
      "Notas de 1: " + notas1;
  }
  
  botao.onclick = function() {
    dichavar();
  };
  