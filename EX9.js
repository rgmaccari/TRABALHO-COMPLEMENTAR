let preconormal = document.querySelector("#preconormal");
let formadepagamento = document.querySelector("#formadepagamento");
let botao = document.querySelector("#botao");
let resultados = document.querySelector("#resultados");

function valorparapagar(){
    let preco = Number(preconormal.value);
    let pagamento = String(formadepagamento.value).toLocaleLowerCase();
        if (pagamento === 'dinheiro'){
            let dez = 10/100;
            let desconto = preco*dez;
            let total = preco-desconto;
            resultados.innerHTML =
            'Valor do desconto: R$'+desconto.toFixed(2)+'<br>'+
            'Valor a ser pago: R$'+total.toFixed(2);
        }else if (pagamento === 'cartão'){
            let quinze = 15/100;
            let desconto = preco*quinze;
            let total = preco-desconto;
            resultados.innerHTML =
            'Valor do desconto: R$'+desconto.toFixed(2)+'<br>'+
            'Valor a ser pago: R$'+total.toFixed(2);
        }else if (pagamento === '2x sem juros'){
            let parcela = preco/2;
            resultados.innerHTML =
            'Valor por parcela: R$'+parcela.toFixed(2)+'<br>'+
            'Valor a ser pago: R$'+preco.toFixed(2);
        }else if (pagamento === '3x com juros'){
            let dez = 10/100;
            let juros = preco*dez;
            let total = preco+juros;
            let parcela = total/3;
            resultados.innerHTML =
            'Valor dos juros: R$'+juros.toFixed(2)+'<br>'+
            'Valor total: R$'+total.toFixed(2)+'<br>'+
            'Valor da parcela: R$'+parcela.toFixed(2)+'<br>';
        }else{
            resultados.innerHTML = 'Verifique os dados digitados.'
        }
}

botao.onclick = function(){
    valorparapagar();
}