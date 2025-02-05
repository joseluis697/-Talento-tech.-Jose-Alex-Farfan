let miGrafico = null; // Variable global para almacenar el gráfico

async function crearGrafico() {
    const datos = await cargarCSV('09 cumulative-installed-wind-energy-capacity-gigawatts.csv'); 
    const etiquetas = datos.map(row => row.Fecha); 
    const valores = datos.map(row => row.Valor); 
    
    

    const ctx = document.getElementById('grafico').getContext('2d');

    // Si ya existe un gráfico, lo destruimos antes de crear uno nuevo
    if (miGrafico) {
        miGrafico.destroy();
    }

    // Crear un nuevo gráfico y guardarlo en la variable
    miGrafico = new Chart(ctx, {
        type: 'line',
        data: {
            labels: etiquetas,
            datasets: [{
                label: 'Datos del CSV',
                data: valores,
                borderColor: 'blue',
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: { display: true },
                y: { display: true }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', crearGrafico);
