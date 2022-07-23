import { createRouter } from "./context";
import { z } from "zod";

const createGuestBookSchema = z.object({
  username: z.string(),
  commemt: z.string(),
});

export const guestBook = createRouter().mutation("create", {
  input: createGuestBookSchema,
  async resolve({ input }) {
    const { username, commemt } = input;

    return console.log("Inputted: ", { username, commemt });
  },
});
