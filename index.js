import express from "express";
import { routers } from "./src/routers/routers.js";
import path from "path";

const app = express();
const port = 3009;
let __dirname = path.resolve(path.dirname(""));

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.set("view engine", "ejs");
app.use(routers);
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
    console.log(`Estou rodando na porta http://localhost:${port}`);
});
