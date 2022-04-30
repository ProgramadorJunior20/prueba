import express from "express";
import morgan from "morgan"; /* Nos muestra informacion por consola de peteciones realicizadas */
import cors from "cors"; /* Nos permite interactuar entre servidores back and front */
import path from "path";

import tasksRoutes from "./routes";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api", tasksRoutes);

app.use(express.static(path.join(__dirname, '..', '..', 'dist')));

export default app;
