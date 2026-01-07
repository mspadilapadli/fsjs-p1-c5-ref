const { Art } = require("../models");
class Controller {
    static async readArts(req, res) {
        try {
            const data = await Art.findAll();
            res.render("arts", { data });
        } catch (error) {
            console.log(error.message);
        }
    }

    static async getFormAddoUpdate(req, res) {
        try {
            const { id } = req.params;
            let art = {};
            let action = "/arts/add";

            if (id) {
                art = await Art.findByPk(id);
                action = `/arts/edit/${id}`;
            }
            res.render("showForm", { art, action, error: {}, isEdit: false });
        } catch (error) {
            console.log(error);
            // res.send(error);
        }
    }

    static async postAdd(req, res) {
        try {
            let { name, artist, date, photo, placeOfOrigin, description } =
                req.body;
            let payload = {
                name,
                artist,
                date,
                photo,
                placeOfOrigin,
                description,
            };
            await Art.create(payload);
            res.redirect("/");
        } catch (error) {
            res.send(error);
        }
    }
    static async showDetail(req, res) {
        try {
            const { id } = req.params;
            const art = await Art.findByPk(id);
            // res.send(art);
            res.render("detail-art", { art });
        } catch (error) {
            res.send(error);
        }
    }
}

module.exports = Controller;
