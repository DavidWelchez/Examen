// Calcula las cuotas basadas en el método francés
// couta = (capital * i) / (1 - (i + 1) ^ -n)
// i = interés
// n = períodos (en meses)
exports.calcularMetodo = (capital, tasaInteres, plazo) => {
    
    let mes = 0;
    let interes = 0;
    let tasaInteresDecimal = tasaInteres / 100;
    const cuotas = [];
  let capitalFinal =0;  
  
    // Transformar los años en meses
    plazo = Math.round(plazo * 12);
  
    // Calcular la cuota
   
  
    while (mes != plazo) {
     
capitalFinal = capital * (1+tasaInteresDecimal) ** plazo;

interes = tasaInteres ;
      // Actualizar el mes (período)
      mes++;
  
     
  
      // Almacenar los valores en el arreglo
      cuotas.push({
        mes,
        interes,
        capital,
        capitalFinal,
      });
    }
  
    return cuotas;
  };