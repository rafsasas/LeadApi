import { createLead } from '../lead/respository';

export const create = async (name: string, email: string, phone: string) => {
  if (!name || !email || !phone) {
    throw new Error('Todos os campos são obrigatórios.');
  }

  return createLead({ name, email, phone });
};
