const models = require('../models');
const Categoria = require('../models').Categoria;

module.exports = {
    list: async(req, res, next) => {
        try {
            const reg = await models.Articulo.findAll({
                order: [
                    ['id', 'ASC']
                ],
                
                include: [{
                    model: Categoria,
                    as: 'categoria'
                }],
            });
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
            let article = await models.Articulo.findOne({
                where: {
                    id: req.params.articleId
                }
            });

            if (!article) {
                return res.status(404).send("El artículo no existe");
            }

            res.status(200).json(article)
        } catch (e) {
            res.status(500).send("Hubo un error en el servidor");
            next();
        }
    },

    add: async(req, res, next) => {
        try {
            const reg = await models.Articulo.create(req.body);
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send('Ocurrió un error -> ' + e);
            next(e);
        }
    },

    update: async(req, res, next) => {
        try {
            const reg = await models.Articulo.update(
                { categoriaId: req.body.categoria, codigo: req.body.codigo, nombre: req.body.nombre, descripcion: req.body.descripcion }, 
                { where: { id: req.body.id } }
                );
            if (reg) {
                const reg = await models.Articulo.findOne({ where: { id: req.body.id } })
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
            const reg = await models.Articulo.update({ estado: 1 }, { where: { id: req.body.id } });
            if (reg) {
                const reg = await models.Articulo.findOne({ where: { id: req.body.id } })
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
            const reg = await models.Articulo.update({ estado: 0 }, { where: { id: req.body.id } });
            if (reg) {
                const reg = await models.Articulo.findOne({ where: { id: req.body.id } })
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
            const reg = await models.Articulo.destroy({where:{id:req.body.id}});
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