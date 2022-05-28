import * as yup from "yup";
import { NextFunction, Request, Response } from "express";

export const cepValidate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cepSchema = yup.object().shape({
    cep: yup
      .string()
      .required("CEP não informado")
      .length(8, "Tamanho do CEP deve ser 8 caracteres")
      .matches(/[0-9]{5}[0-9]{3}/, "Formato de CEP inválido"),
  });
  try {
    const resource = req.params;
    await cepSchema.validate(resource);
    next();
  } catch (e: any) {
    res.status(400).json({ mensagem: e.errors.join(", ") });
  }
};
