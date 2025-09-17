import { z } from 'zod';

export const todoSchema = z.object({
  /**
   * @todo: Add the validation for the title and the description
   * - Title: required, min 3 characters, max 20 characters
   * - Description: required, min 3 characters, max 100 characters
   */
  title: z
    .string()
    .min(3, { message: 'Todo title required' })
    .max(20, { message: 'Todo title too long' }),
  description: z
    .string()
    .min(3, { message: 'Todo desc required' })
    .max(100, { message: 'Todo desc too long' }),
});

export type TodoSchemaType = z.infer<typeof todoSchema>;
