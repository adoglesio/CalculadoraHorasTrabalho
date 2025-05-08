function calcularHoras() {
    const horasPorSemana = parseFloat(document.getElementById("horasPorSemana").value);
    const dataInicio = new Date(document.getElementById("dataInicio").value);
    const dataFim = new Date(document.getElementById("dataFim").value);
  
    if (isNaN(horasPorSemana) || !dataInicio || !dataFim || dataInicio > dataFim) {
      document.getElementById("resultado").textContent = "Por favor, preencha todos os campos corretamente.";
      return;
    }
  
    const umDia = 24 * 60 * 60 * 1000;
    const diasTotais = Math.round((dataFim - dataInicio) / umDia) + 1;
  
  
    const horasPorDia = horasPorSemana / 5;
  
    const horasTrabalhadas = (horasPorDia * diasTotais).toFixed(2);
  
    document.getElementById("resultado").textContent = `Você trabalhou aproximadamente ${horasTrabalhadas} horas nesse período.`;
  }
  