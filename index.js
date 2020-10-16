
/// REPOSITORIO GIT
// https://github.com/DavidWelchez/Examen.git


// Importar 
const express = require("express");

//handlebars
const exphbs = require("express-handlebars");


// Importar body parser 
const bodyParser = require("body-parser");

// Importar la función de cálculo de Interes
const { calcularMetodo } = require("./calculoDeInteres");



// Crear un servidor express
const app = express();


// Indicar a express utilizar handlebars 
app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));

app.set("view engine", "hbs")


// Habilitar body parse 
app.use(bodyParser.urlencoded({ extended: true }));




// Crear  ruta para /

app.get("/", (req, res, next) => {
  res.render("formulario_interes");
});

/////

app.post("/CalculoInteres", (req, res, next) => {
  // Asignación por destructuring
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
  const { monto, tasaInteres, periodo } = req.body;

  const cuotas = calcularMetodo(monto, tasaInteres, periodo);

  res.render("Formulario_resultado", { cuotas });
});







// Inicializar el servidor en un puerto en específico
app.listen(5000, () => {
    console.log("Servidor ejecutándose en el puerto 5000");
  });
