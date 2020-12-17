const routerx = require('express-promise-router');
const usuarioController = require('../../controllers/usuarioController.js');
const auth = require('../../middlewares/auth.js');

const router = routerx();

router.post('/login', usuarioController.login);
router.get('/list', auth.verifyAdministrador, usuarioController.list); //pagina.com/api/usuario/list
router.post('/add', auth.verifyAdministrador, usuarioController.add); //pagina.com/api/usuario/add
router.put('/update', auth.verifyAdministrador, usuarioController.update); //pagina.com/api/usuario/update
router.put('/activate', auth.verifyAdministrador, usuarioController.activate); //pagina.com/api/usuario/activate
router.put('/deactivate', auth.verifyAdministrador, usuarioController.deactivate);  //pagina.com/api/usuario/deactivate

module.exports = router;
