import { connection } from "../database/connection.js";
import { bebes } from "../model/reborn.js";

export const getIndex = async (req, res) => {
    try {
        const listBebes = await bebes.findAll();
        res.render("index.ejs", { listBebes });
        console.log(listBebes);
    } catch (error) {
        res.send(error.message);
    }
};

export const getDetalhes = async (req, res) => {
    try {
        const bebesDetalhes = await bebes.findByPk(req.params.id);
        res.render("detalhes.ejs", { bebesDetalhes });
    } catch (error) {
        res.send(error.message);
    }
};
