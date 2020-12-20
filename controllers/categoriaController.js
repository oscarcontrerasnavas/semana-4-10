const models = require('../models');

module.exports = {
    list: async(req, res, next) => {
        try {
            const reg = await models.Categoria.findAll();
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
            let category = await models.Categoria.findOne({
                where: {
                    id: req.query.id
                }
            });

            if (!category) {
                return res.status(404).send("La categoría no existe");
            }

            res.status(200).json(category)
        } catch (e) {
            res.status(500).send("Hubo un error en el servidor");
            next();
        }
    },

    add: async(req, res, next) => {
        try {
            const reg = await models.Categoria.create(req.body);
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
            const reg = await models.Categoria.update(
                {
                    nombre: req.body.nombre,
                    descripcion: req.body.descripcion,
                }, 
                {
                    where: {
                        id: req.body.id
                    }
                }
            )
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },

    activate: async(req, res, next) => {
        try {
            const reg = await models.Categoria.update({ estado: 1 }, { where: { id: req.body.id } });
            res.status(200).json(reg)
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error ->' + e
            });
            next(e);
        }
    },

    deactivate: async(req, res, next) => {
        try {
            const reg = await models.Categoria.update({ estado: 0 }, { where: { id: req.body.id } });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error -> ' + e 
            });
            next(e);
        }
    },

    remove: async (req, res, next) => {
        try {
            const reg = await models.Categoria.destroy({
                where: {
                    id: req.body.id
                }
            });
            res.status(200).send(reg);
        } catch (e) {
            res.status(500).send("Ha ocurrido un error -> " + e);
            next(e);
        }
    }
}