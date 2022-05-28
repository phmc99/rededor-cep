import { Router } from "express";
import { getCep } from "../controllers/cep";
import { cepValidate } from "../middlewares/cep-validate";

const cepRouter = Router();

const PORT = process.env.PORT || 3001;
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;

cepRouter.get("", (req, res) =>
  res.json({
    mensagem: `Busque o CEP seguindo esse exemplo: ${BASE_URL}/21051470`,
  })
);
cepRouter.get("/:cep", cepValidate, getCep);

export default cepRouter;
