function converterDolar() {
    var valorDolar = parseFloat(document.getElementById("valor-dolar").value)
    if (valorDolar > 0) {
        var valorReal = valorDolar * 5.09
        document.getElementById("resultado-real").innerHTML = valorReal.toFixed(2)
    } else {
        document.getElementById("resultado-real").innerHTML = "Adicione um valor"
    }   
}