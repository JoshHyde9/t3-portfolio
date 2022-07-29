import { z } from "zod";

export const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  NODE_ENV: z.enum(["development", "test", "production"]),
  SPARKPOST_API_KEY: z.string(),
  MY_EMAIL_ADDRESS: z.string(),
});
