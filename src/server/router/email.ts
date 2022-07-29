import { createRouter } from "./context";
import { z } from "zod";
import { sendEmail } from "../../utils/sendEmail";

const createEmailSchema = z.object({
  subject: z.string().min(1, { message: "Please fill in required field." }),
  message: z.string().min(1, { message: "Please fill in required field." }),
  name: z.string().min(1, { message: "Please fill in required field." }),
});

export const email = createRouter().mutation("sendEmail", {
  input: createEmailSchema,
  async resolve({ input }) {
    const { subject, message, name } = input;

    await sendEmail(subject, message, name);
  },
});
