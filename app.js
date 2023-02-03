require('dotenv').config();

const express = require('express');
const logger = require('morgan');

const app = express();

//configure de data base
require('./config/db.config');

require('./config/hbs.config');

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

//app.use(express.static(`${__dirname}/public`))
//los static se ponen antes que los otros "use" para que se cargue primero

// es un middleware para hacer los post del formulario, hace un res del formulario en la view, tiene que ir antes les use, y las rutas
app.use(express.urlencoded());

//para todas las peticiones hagan log
app.use(logger('dev'));

//middleware para no tener que escribir req.path en cada una de las vistas
app.use((req, res, next) => {
  res.locals.currentPath = req.path;
  next();
})

const routes = require('./config/routes.config');
app.use('/', routes);

//middleware  de rror para todos los catch (), importante, de pone despeus de las routes, no antes
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500);
  res.send("Ops, ha sucedido un error");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.info(`App listening at port ${port}`))

