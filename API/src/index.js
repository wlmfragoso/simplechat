// instancias
const express = require('express');
const app = express();
const morgan = require('morgan');
const { mongoose } = require('./database');
const cors = require('cors');

// configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

// definicion de inputs y outputs
app.use(cors({origin: 'http://localhost:4200'}));
app.use(morgan('dev'));
app.use(express.json());
//app.use(express.urlencoded({extended: false}));

// rutas
app.use('/', require('../routes/user.routes'));

// al iniciar el servidor
app.listen(app.get('port'),() => {
    console.log( "Servidor arriba en el puerto " + app.get('port').toString());
});