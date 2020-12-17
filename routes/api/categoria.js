
const routerx = require('express-promise-router');
const categoriaController = require('../../controllers/categoriaController.js');
const auth = require('../../middlewares/auth.js');

const router = routerx();

router.get('/list', categoriaController.list); //pagina.com/api/categoria/list
router.get('/query/:categoryId', categoriaController.query);
router.post('/add', categoriaController.add); //pagina.com/api/categoria/add
router.put('/update', categoriaController.update); //pagina.com/api/categoria/update
router.put('/activate', categoriaController.activate); //pagina.com/api/categoria/activate
router.put('/deactivate', categoriaController.deactivate);  //pagina.com/api/categoria/deactivate

module.exports = router;