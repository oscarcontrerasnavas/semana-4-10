//Middleware de autenticacion;
const tokenService = require('../services/token');

module.exports = {
    verifyUsuario: async(req, res, next) => {
        console.log(req.headers.token);
        if (!req.headers.token) {
            return res.status(404).send({
                message: 'No hay token'
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if (response.rol == 'Administrador' || response.rol == 'Vendedor' || response.rol == 'Almacenero') {
            next();
        } else {
            return res.status(403).send({
                message: 'No autorizado'
            });
        }
    },

    verifyAdministrador: async(req, res, next) => {
        console.log(req.headers.token);
        if (!req.headers.token) {
            return res.status(404).send({
                message: 'No hay token'
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if (response.rol == 'Administrador') {
            next();
        } else {
            return res.status(403).send({
                message: 'No autorizado'
            });
        }
    },

    verifyVendedor: async(req, res, next) => {
        console.log(req.headers.token);
        if (!req.headers.token) {
            return res.status(404).send({
                message: 'No hay token'
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if (response.rol == 'Administrador' || response.rol == 'Vendedor') {
            next();
        } else {
            return res.status(403).send({
                message: 'No autorizado'
            });
        }
    },
}