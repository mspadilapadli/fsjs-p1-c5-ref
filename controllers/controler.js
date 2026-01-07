const { Art } = require("../models");
class Controller {
    static async readArts(req, res) {
        try {
            const { qArtName, qArtist } = req.query;
            const data = await Art.getArts(qArtName, qArtist);
            let { totalData, maxDate, minDate } = await Art.notif();

            res.render("arts", {
                data,
                totalData,
                minDate,
                minDate: new Date(minDate).getFullYear(),
                maxDate: new Date(maxDate).getFullYear(),
                qArtName,
                qArtist,
            });
        } catch (error) {
            console.log(error.message);
        }
    }

    static async getFormAddoUpdate(req, res) {
        try {
            const { id } = req.params;
            let art = {};
            let action = "/arts/add";
            let isEdit = false;

            if (id) {
                art = await Art.findByPk(id);
                action = `/arts/edit/${id}`;
                isEdit = true;
            }
            res.render("showForm", { art, action, error: {}, isEdit });
        } catch (error) {
            res.send(error);
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
            if (!art) throw "Data not found, Plese check your input";
            // res.send(art);
            res.render("detail-art", { art });
        } catch (error) {
            res.send(error);
        }
    }

    static async postEdit(req, res) {
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
            const { id } = req.params;

            //* with instance method update
            const foundArt = await Art.findByPk(id);
            if (!foundArt) throw "Data not found, Plese check your input";
            await foundArt.update(payload);

            //* with static method
            // const update = await Art.update(payload, {
            //     where: { id },
            // });
            // if (!update) throw "Data not found, Plese check your input";

            res.redirect("/");
        } catch (error) {
            res.send(error);
        }
    }

    static async deleteArt(req, res) {
        try {
            const { id } = req.params;

            //* with instace method del
            // const foundData = await Art.findByPk(id);
            // if (!foundData) throw "Data not found, Please check your input";
            // await foundData.destroy();

            //* with static method
            const del = await Art.destroy({ where: { id } });
            if (!del) throw "Data not found, Please check your input";

            res.redirect("/");
        } catch (error) {
            res.send(error);
        }
    }
}

module.exports = Controller;
