import { Request, Response } from "express";
import { findCepApi } from "../services/cep";

export const getCep = async (req: Request, res: Response) => {
  try {
    const { cep } = req.params;
    const response = await findCepApi(cep);
    if (!response) {
      res.status(404).json({ mensagem: "CEP não encontrado" });
    }
    res.json(response);
  } catch (error: any | undefined) {
    res.status(500).json({ mensagem: error.message });
  }
};
