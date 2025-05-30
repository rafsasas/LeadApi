import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createLead = async (data: { name: string; email: string; phone: string }) => {
  return prisma.lead.create({ data });
};
