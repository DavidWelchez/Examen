// Importar 
const express = require("express");

//handlebars
const exphbs = require("express-handlebars");




// Crear un servidor express
const app = express();


// Indicar a express utilizar handlebars 
app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));







// Inicializar el servidor en un puerto en específico
app.listen(5000, () => {
    console.log("Servidor ejecutándose en el puerto 5000");
  });
