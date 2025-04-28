import { z } from 'zod';

export const todoSchema = z.object({
  title: z.string(),
  description: z.string(),
});

export type TodoSchemaType = z.infer<typeof todoSchema>;
