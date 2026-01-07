"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Art extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }

        static async getArts() {
            try {
                return await Art.findAll();
            } catch (error) {
                throw error;
            }
        }
        //getter
        get formatDate() {
            return new Date(this.date).toISOString().split("T")[0];
        }
    }
    Art.init(
        {
            name: DataTypes.STRING,
            artist: DataTypes.STRING,
            date: DataTypes.DATE,
            description: DataTypes.TEXT,
            photo: DataTypes.STRING,
            placeOfOrigin: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Art",
        }
    );
    return Art;
};
