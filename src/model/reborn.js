import Sequelize from "sequelize";
import { connection } from "../database/connection.js";

export const bebes = connection.define(
    "bebes",
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        nome_kit: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        peso: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        sexo: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        tamanho: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        corpinho: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        data_nascimento: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        img: {
            type: Sequelize.STRING,
            AllowNull: false,
        },
        iframe: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
        createdAt: false,
        updatedAt: false,
        timestamps: false,
    },
);

function initTable() {
    bebes.async();
}

initTable();
