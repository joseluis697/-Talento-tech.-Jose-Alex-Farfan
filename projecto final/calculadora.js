document.getElementById('energyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const consumoAnual = parseFloat(document.getElementById('consumoAnual').value);
    if (isNaN(consumoAnual) || consumoAnual <= 0  ) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }
    const consumoEolico = (consumoAnual /1000000) *12 ;
    //const costoEolico = consumoEolico * valorConsumo; 
    const consumo =consumoEolico * 20 ;
    document.getElementById('resultadoText').innerText = `el porcentaje de energia renovable en su consumo es :  ${consumo.toFixed(2)}`;
});
