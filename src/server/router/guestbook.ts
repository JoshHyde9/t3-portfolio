import { createRouter } from "./context";
import { z } from "zod";

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
      const allGuests = await ctx.prisma.guestBook.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });

      return allGuests;
    },
  });
