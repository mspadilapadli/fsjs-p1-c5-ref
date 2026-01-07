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
}

module.exports = Controller;
