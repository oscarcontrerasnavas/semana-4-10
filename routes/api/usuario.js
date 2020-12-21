const routerx = require('express-promise-router');
const usuarioController = require('../../controllers/usuarioController.js');
const auth = require('../../middlewares/auth.js');

const router = routerx();

router.post('/login', usuarioController.login);
router.get('/list', usuarioController.list); //pagina.com/api/usuario/list
router.get('/query/:id',auth.verifyAdministrador, usuarioController.query);
router.post('/add',auth.verifyAdministrador, usuarioController.add); //pagina.com/api/usuario/add
router.put('/update',auth.verifyAdministrador, usuarioController.update); //pagina.com/api/usuario/update
router.put('/activate',auth.verifyAdministrador, usuarioController.activate); //pagina.com/api/usuario/activate
router.put('/deactivate',auth.verifyAdministrador, usuarioController.deactivate);  //pagina.com/api/usuario/deactivate
router.delete('/remove',auth.verifyAdministrador, usuarioController.remove); // site.com/api/usuario/remove

module.exports = router;
