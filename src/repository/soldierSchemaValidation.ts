import { z } from 'zod';

export const soldierSchema = z.object({
  id: z.string().min(7).max(7),
  name: z.string().min(1),
  rank: z.enum(['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond']),
  limitations: z.array(z.string()),
  duties: z.array(z.string()).optional(),
});

export const soldierSearchSchema = z.object({
  name: z.string().optional(),
  rank: z.enum(['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond']).optional(),
  limitations: z.union([z.string(), z.array(z.string())]).optional(),
  duties: z.string().optional(),
}).strict();
