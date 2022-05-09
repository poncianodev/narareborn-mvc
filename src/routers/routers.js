import express from "express";
import {
    getIndex,
    getDetalhes,
    getDeletar,
    getCriar,
} from "../controller/Controllador.js";

export const routers = express.Router();

routers.get("/", getIndex);
routers.get("/detalhes/:id", getDetalhes);
routers.get("/deletar/:id", getDeletar);
routers.get("/criar", getCriar);
