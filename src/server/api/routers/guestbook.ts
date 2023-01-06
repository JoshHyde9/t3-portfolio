import { z } from "zod";

import { createTRPCRouter, rateLimitedProcedure } from "../trpc";

const createGuestBookSchema = z.object({
  username: z
    .string({ required_error: "Please fill in required field." })
    .min(1, { message: "Please fill in required field." })
    .max(50, { message: "Username has to be 50 characters or less." }),
  comment: z
    .string({ required_error: "Please fill in required field." })
    .min(1, { message: "Please fill in required field." })
    .max(500, { message: "Comment has to be 500 characters or less." }),
});

export const guestbookRouter = createTRPCRouter({
  getAll: rateLimitedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.guestBook.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }),
  create: rateLimitedProcedure
    .input(createGuestBookSchema)
    .mutation(async ({ input, ctx }) => {
      const { username, comment } = input;
      return await ctx.prisma.guestBook.create({
        data: { username, comment },
      });
    }),
});
