const routerx = require('express-promise-router');
const usuarioController = require('../../controllers/usuarioController.js');
const auth = require('../../middlewares/auth.js');

const router = routerx();

router.post('/login', usuarioController.login);
router.get('/list', usuarioController.list); //pagina.com/api/usuario/list
router.get('/query/:id', usuarioController.query);
router.post('/add', usuarioController.add); //pagina.com/api/usuario/add
router.put('/update', usuarioController.update); //pagina.com/api/usuario/update
router.put('/activate', usuarioController.activate); //pagina.com/api/usuario/activate
router.put('/deactivate', usuarioController.deactivate);  //pagina.com/api/usuario/deactivate
router.delete('/remove', usuarioController.remove); // site.com/api/usuario/remove

module.exports = router;
