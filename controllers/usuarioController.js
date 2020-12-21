const models = require('../models');
var bcrypt = require('bcryptjs');
const token = require('../services/token');

module.exports = {
    login: async(req, res, next) => {
        try {
            console.log(req.body)
            let user = await models.Usuario.findOne({ where: { email: req.body.email } });
            if (user) {
                let match = await bcrypt.compare(req.body.password, user.password);
                if (match) {
                    console.log(user.rol);
                    let tokenReturn = await token.encode(user.id, user.rol);
                    res.status(200).json({ user, tokenReturn });
                } else {
                    res.status(401).send({
                        auth: false,
                        accessToken: null,
                        reason: "Password Invalido!"
                    });
                }
            } else {
                res.status(404).send({
                    message: 'Usuario no encontrado.'
                });
            }
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error.'
            });
            next(e);
        }
    },

    list: async(req, res, next) => {
        try {
            const reg = await models.Usuario.findAll();
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },

    query: async (req, res, next) => {
        try {
            let category = await models.Usuario.findOne({
                where: {
                    id: req.params.id
                }
            });

            if (!category) {
                return res.status(404).send("La categoría no existe");
            }

            res.status(200).json(category)
        } catch (e) {
            res.status(500).send("Error -> " + e);
            next(e);
        }
    },

    add: async(req, res, next) => {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 10);
            const reg = await models.Usuario.create(req.body);
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },

    update: async(req, res, next) => {
        try {
            let pas = req.body.password;
            const reg0 = await models.Usuario.findOne({ where: { id: req.body.id } });
            if (pas != reg0.password) {
                req.body.password = await bcrypt.hash(req.body.password, 10);
            }
            const reg = await models.Usuario.update({ rol: req.body.rol, nombre: req.body.nombre, email: req.body.email, password: req.body.password }, { where: { id: req.body.id } });
            if (reg) {
                const reg = await models.Usuario.findOne({ where: { id: req.body.id } })
                return res.status(200).json(reg);
            }
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },

    activate: async(req, res, next) => {
        try {
            const reg = await models.Usuario.update({ estado: 1 }, { where: { id: req.body.id } });
            if (reg) {
                const reg = await models.Usuario.findOne({ where: { id: req.body.id } })
                return res.status(200).json(reg);
            }
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    
    deactivate: async(req, res, next) => {
        try {
            const reg = await models.Usuario.update({ estado: 0 }, { where: { id: req.body.id } });
            if (reg) {
                const reg = await models.Usuario.findOne({ where: { id: req.body.id } })
                return res.status(200).json(reg);
            }
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },

    remove: async (req, res, next) => {
        try {
            const reg = await models.Usuario.destroy({where:{id:req.body.id}});
            if (!reg) {
                return res.status(404).send("No se ha encontrado un elemento");
            }
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send("Error -> " + e);
            next(e);
        }
    }
}