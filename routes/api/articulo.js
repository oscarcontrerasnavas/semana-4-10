/* un Ejemplo  de como se veria la ruta listar - modelo del  articulo*/
const routerx = require('express-promise-router');
const articuloController = require('../../controllers/articuloController.js');
const auth = require('../../middlewares/auth.js');

const router = routerx();

router.get('/list', articuloController.list); //pagina.com/api/articulo/list
router.get('/query/:articleId', articuloController.query);
router.post('/add', auth.verifyVendedor, articuloController.add); //pagina.com/api/articulo/add
router.put('/update', auth.verifyAdministrador, articuloController.update); //pagina.com/api/articulo/update
router.put('/activate', auth.verifyAdministrador, articuloController.activate); //pagina.com/api/articulo/activate
router.put('/deactivate', auth.verifyAdministrador, articuloController.deactivate);  //pagina.com/api/articulo/deactivate
router.delete('/remove', auth.verifyAdministrador, articuloController.remove); // site.com/api/articulo/remove

module.exports = router;