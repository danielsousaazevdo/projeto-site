let valores = []; // <-- IMPORTANTE: cria o array uma única vez
function calcular() {
    var distancia = parseFloat(document.getElementById('txtkm').value)
    var consumo = parseFloat(document.getElementById('txtcon').value)
    var valorcombustivel = parseFloat(document.getElementById('txtvalor').value)
    var res = document.getElementById('res')
    if (distancia <= 0 || consumo <= 0 || valorcombustivel <= 0) {
        window.alert('Por favor, insira valores positivos maiores que zero para distância, consumo e preço do combustível.')
    } else {
        var litrosnecessarios = distancia / consumo 
        var custototal = litrosnecessarios * valorcombustivel
        res.innerHTML = `<p>Considerando os  valores informados, você precisará de ${litrosnecessarios.toFixed(2)} litros de combustível para percorrer ${distancia} km.</p>
        <p>O custo total estimado para a viagem será de R$ ${custototal.toFixed(2)}.</p>`
    }

}