"use strict";
const { Model } = require("sequelize");
const { Op } = require("sequelize");

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

        static async getArts(qArtName, qArtist) {
            try {
                const where = {};
                if (qArtName)
                    where.name = {
                        [Op.iLike]: `%${qArtName}%`,
                    };
                if (qArtist)
                    where.artist = {
                        [Op.iLike]: `%${qArtist}%`,
                    };
                const option = {
                    where,
                    order: [["date", "desc"]],
                };
                return await Art.findAll(option);
            } catch (error) {
                throw error;
            }
        }
        //getter
        get formatDate() {
            return new Date(this.date).toISOString().split("T")[0];
        }

        static async notif() {
            try {
                let { totalData, maxDate, minDate } = await Art.findOne({
                    attributes: [
                        [
                            sequelize.fn("COUNT", sequelize.col("id")),
                            "totalData",
                        ],
                        [sequelize.fn("MAX", sequelize.col("date")), "maxDate"],
                        [sequelize.fn("MIN", sequelize.col("date")), "minDate"],
                    ],
                    raw: true, // agar hasilnya object biasa,bukan instance sequelize
                });

                return {
                    totalData,
                    maxDate,
                    minDate,
                };
            } catch (error) {
                throw error;
            }
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
