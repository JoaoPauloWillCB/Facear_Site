var url = "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='09-15-2023'&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao";

let request = new XMLHttpRequest();

request.open('GET', url, true);
request.onload = function() {
 if (request.readyState == 4 && request.status == 200) {
    var resposta = JSON.parse(request.responseText);
    var valores = resposta.value[0];
    console.log(valores.cotacaoCompra);
    console.log(valores.cotacaoVenda);
    console.log(valores.dataHoraCotacao);

    document.getElementById('cotacao-compra').innerHTML = valores.cotacaoCompra.toFixed(2);
    document.getElementById('data-hora-acesso').innerHTML = valores.dataHoraCotacao;
 } 
};
request.onerror = function() {
    console.log("Erro:"+ request);
};
request.send();