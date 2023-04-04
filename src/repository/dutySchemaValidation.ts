import * as z from 'zod';

const dutySchema = z.object({
  name: z.string(),
  description: z.string(),
  location: z.string(),
  time: z.object({
    start: z.date(),
    end: z.date(),
  }),
  constraints: z.array(z.string()),
  soldiersRequired: z.number(),
  value: z.number(),
  soldiers: z.array(z.string()).optional(),
}).strict();

const dutySearchSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  location: z.string().optional(),
  time: z.union([z.date(), z.array(z.date())]).optional(),
  constraints: z.union([z.array(z.string()), z.string()]).optional(),
  soldiersRequired: z.number().optional(),
  value: z.number().optional(),
  soldiers: z.union([z.array(z.string()), z.string()]).optional(),
}).strict();

const dutyUpdateSchema = z.object({
  name: z.string().optional(),
});
export { dutySchema, dutySearchSchema, dutyUpdateSchema };
