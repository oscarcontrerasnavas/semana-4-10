
const routerx = require('express-promise-router');
const categoriaController = require('../../controllers/categoriaController.js');
const auth = require('../../middlewares/auth.js');

const router = routerx();

//GET
router.get('/list', categoriaController.list); //pagina.com/api/categoria/list
router.get('/query', categoriaController.query);

// POST
router.post('/add', categoriaController.add); //pagina.com/api/categoria/add

// PUT
router.put('/update', categoriaController.update); //pagina.com/api/categoria/update
router.put('/activate', categoriaController.activate); //pagina.com/api/categoria/activate
router.put('/deactivate', categoriaController.deactivate);  //pagina.com/api/categoria/deactivate

// DELETE
router.delete('/remove', auth.verifyAdministrador, categoriaController.remove);



module.exports = router;