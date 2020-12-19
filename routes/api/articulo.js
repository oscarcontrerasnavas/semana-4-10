/* un Ejemplo  de como se veria la ruta listar - modelo del  articulo*/
const routerx = require('express-promise-router');
const articuloController = require('../../controllers/articuloController.js');
const auth = require('../../middlewares/auth.js');

const router = routerx();

// GET
router.get('/list', articuloController.list); //pagina.com/api/articulo/list
router.get('/query', articuloController.query);

// POST
router.post('/add', articuloController.add); //pagina.com/api/articulo/add

// PUT
router.put('/update', articuloController.update); //pagina.com/api/articulo/update
router.put('/activate', articuloController.activate); //pagina.com/api/articulo/activate
router.put('/deactivate', articuloController.deactivate);  //pagina.com/api/articulo/deactivate

// DELETE
router.delete('/remove', auth.verifyAdministrador, articuloController.remove);

module.exports = router;