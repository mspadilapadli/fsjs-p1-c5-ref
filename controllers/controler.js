const { Art } = require("../models");
class Controller {
    static async readArts(req, res) {
        try {
            const data = await Art.findAll();
            res.send(data);
        } catch (error) {
            console.log(error.message);
        }
    }
    static async readArts(req, res) {
        try {
            const data = await Art.getArts();
            res.send(data);
        } catch (error) {
            console.log(error.message);
        }
    }
}

module.exports = Controller;
