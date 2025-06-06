import { z } from 'zod';

export const createUserSchema = z.object({
  name: z.string().min(1, 'Il nome è obbligatorio'),
  email: z.string().email('Email non valida'),
});

// Tipi TypeScript derivati direttamente dallo schema
export type CreateUserInput = z.infer<typeof createUserSchema>;