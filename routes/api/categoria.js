
const routerx = require('express-promise-router');
const categoriaController = require('../../controllers/categoriaController.js');
const auth = require('../../middlewares/auth.js');

const router = routerx();

router.get('/list', categoriaController.list); //pagina.com/api/categoria/list
router.get('/query/:categoryId', categoriaController.query);
router.post('/add', auth.verifyVendedor, categoriaController.add); //pagina.com/api/categoria/add
router.put('/update', auth.verifyAdministrador, categoriaController.update); //pagina.com/api/categoria/update
router.put('/activate', auth.verifyAdministrador, categoriaController.activate); //pagina.com/api/categoria/activate
router.put('/deactivate',auth.verifyAdministrador, categoriaController.deactivate);  //pagina.com/api/categoria/deactivate
router.delete('/remove', auth.verifyAdministrador, categoriaController.remove); // site.com/api/categoria/remove

module.exports = router;