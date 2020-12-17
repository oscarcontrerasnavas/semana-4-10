const routerx = require('express-promise-router');
const usuarioRouter = require('./api/usuario.js');
const categoriaRouter = require('./api/categoria.js');
const articuloRouter = require('./api/articulo.js');

const router = routerx();

router.use('/usuario', usuarioRouter);  //pagina.com/api/usuario
router.use('/categoria', categoriaRouter);  //pagina.com/api/categoria
router.use('/articulo', articuloRouter);  //pagina.com/api/articulo

module.exports = router;