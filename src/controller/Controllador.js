import { connection } from "../database/connection.js";
import { bebes } from "../model/reborn.js";

export const getIndex = async (req, res) => {
    try {
        const listBebes = await bebes.findAll({
            order: [["id", "ASC"]],
        });
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

export const getDeletar = async (req, res) => {
    try {
        await bebes.destroy({
            where: { id: req.params.id },
        });
        res.redirect("/");
    } catch (error) {
        res.send(error.message);
    }
};

export const getCriar = async (req, res) => {
    res.render("criar.ejs", { toggle: false });
};

export const postCriar = async (req, res) => {
    try {
        const {
            nome_kit,
            peso,
            sexo,
            tamanho,
            corpinho,
            data_nascimento,
            img,
            iframe,
        } = req.body;
        if (!nome_kit) {
            res.send("O nome é obrigatório.");
        } else if (!peso) {
            res.send("O peso é obrigatório.");
        } else if (!tamanho) {
            res.send("O tamanho é obrigatório.");
        } else if (!corpinho) {
            res.send("O corpinho é obrigatório.");
        } else if (!data_nascimento) {
            res.send("O nascimento é obrigatório.");
        } else if (!img) {
            res.send("O img é obrigatório.");
        } else if (!iframe) {
            res.send("O iframe é obrigatório.");
        }
        await bebes.create({
            nome_kit,
            peso,
            sexo,
            tamanho,
            corpinho,
            data_nascimento,
            img,
            iframe,
        });
        res.render("criar.ejs", {
            toggle: true,
        });
    } catch (error) {
        res.send(error.message);
    }
};

export const getEditar = async (req, res) => {
    try {
        const bebesAtual = await bebes.findByPk(req.params.id);
        res.render("editar.ejs", { bebesAtual });
    } catch (error) {
        res.send(error.message);
    }
};

export const postEditar = async (req, res) => {
    try {
        const {
            nome_kit,
            peso,
            sexo,
            tamanho,
            corpinho,
            data_nascimento,
            img,
            iframe,
        } = req.body;
        await bebes.update(
            {
                nome_kit: nome_kit,
                peso: peso,
                sexo: sexo,
                tamanho: tamanho,
                corpinho: corpinho,
                data_nascimento: data_nascimento,
                img: img,
                iframe: iframe,
            },
            {
                where: { id: req.params.id },
            },
        );
        res.redirect("/");
    } catch (error) {
        res.send(error.message);
    }
};
