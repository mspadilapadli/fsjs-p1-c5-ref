"use strict";

/** @type {import('sequelize-cli').Migration} */
const fs = require("fs");

module.exports = {
    async up(queryInterface, Sequelize) {
        const data = JSON.parse(
            fs.readFileSync("./data/arts.json", "utf-8")
        ).map((item) => {
            delete item.id;
            item.createdAt = item.updatedAt = new Date();
            item.placeOfOrigin = "Indonesia";
            return item;
        });
        await queryInterface.bulkInsert("Arts", data);

        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Arts", null, {});

        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
