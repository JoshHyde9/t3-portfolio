import { createRouter } from "./context";
import { z } from "zod";

const createGuestBookSchema = z.object({
  username: z.string().min(1, { message: "Please fill in required field." }),
  comment: z.string().min(1, { message: "Please fill in required field." }),
});

export const guestBook = createRouter()
  .mutation("create", {
    input: createGuestBookSchema,
    async resolve({ input, ctx }) {
      const { username, comment } = input;

      const newGuest = await ctx.prisma.guestBook.create({
        data: { username, comment },
      });

      return newGuest;
    },
  })
  .query("getAll", {
    async resolve({ ctx }) {
      const allGuests = await ctx.prisma.guestBook.findMany();

      return allGuests;
    },
  });
