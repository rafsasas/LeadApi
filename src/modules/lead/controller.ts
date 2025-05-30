import { Request, Response } from 'express';
import { create } from '../lead/service';

export const store = async (req: Request, res: Response): Promise<Response> => {
  const { name, email, phone } = req.body;

  // Validação simples
  if (!name || !email || !phone) {
    return res.status(400).json({
      message: 'Os campos nome, email e telefone são obrigatórios.',
    });
  }

  try {
    const lead = await create(name, email, phone);
    return res.status(201).json(lead);
  } catch (error: any) {
    console.error('Erro ao criar cadastro:', error);
    return res.status(500).json({
      message: 'Erro interno ao salvar os dados.',
      error: error.message,
    });
  }
};

