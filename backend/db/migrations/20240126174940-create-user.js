"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Users",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        firstName: {
          type: Sequelize.VARCHAR(30),
          notNull: true,
        },
        lastName: {
          type: Sequelize.VARCHAR(30),
          notNull: true,
        },
        username: {
          type: Sequelize.VARCHAR(30),
          allowNull: false,
          unique: true,
        },
        email: {
          type: Sequelize.VARCHAR(256),
          allowNull: false,
          unique: true,
        },
        hashedPassword: {
          type: Sequelize.VARCHAR,
          allowNull: false,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.TIMESTAMPTZ,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.TIMESTAMPTZ,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
      },
      options
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Users";
    return queryInterface.dropTable(options);
  },
};
