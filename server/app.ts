import express from "express";
import cors from "cors";
import cepRouter from "./routes/cep";
import path from "path";

const app = express();
app.use(express.static(path.resolve(__dirname, '../../client/dist')));
app.use(cors());

app.use("/cep", cepRouter);
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../client/dist', 'index.html'));
});


export default app;
