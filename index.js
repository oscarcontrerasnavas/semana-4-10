const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes');
const path = require('path');


const bodyParser = require('body-parser');


const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', router);

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) =>{
    res.send('Conectado!, vamos bien');
})

if (process.env.NODE_ENV !== 'test') {
    app.listen(app.get('port'), () => {
        console.log('Server on port ' + app.get('port') + ' on dev');
    });
}

module.exports = app;

//COMANDOS PARA CREAR LOS MODELOS
//npx sequelize-cli model:generate --name Usuario --attributes rol:string,nombre:string,password:string,email:string,estado:integer
//npx sequelize-cli model:generate --name Articulo --attributes codigo:string,nombre:string,descripcion:string,estado:integer,categoriaId:integer
//npx sequelize-cli model:generate --name Categoria --attributes nombre:string,descripcion:string,estado:integer

//MIGRAR LOS MODELOS CREADOS A LA BASE DE DATOS SEGUN config.json
//npx sequelize-cli db:migrate

//INGRESAR DATOS SEMILLA EN LA BASE DE DATOS
//npx sequelize-cli db:seed:all

//MODIFICAR UN MODELO
//npx sequelize-cli migration:create --name alter-Articulo
