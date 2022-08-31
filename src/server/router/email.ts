import { createRouter } from "./context";
import { z } from "zod";
import { sendEmail } from "../../utils/sendEmail";

const createEmailSchema = z.object({
  name: z.string().min(1, { message: "Please fill in required field." }),
  contactEmail: z
    .string()
    .email({ message: "Please input a valid email address. " }),
  subject: z.string().min(1, { message: "Please fill in required field." }),
  message: z.string().min(1, { message: "Please fill in required field." }),
});

export const email = createRouter().mutation("sendEmail", {
  input: createEmailSchema,
  async resolve({ input }) {
    const { name, contactEmail, subject, message } = input;

    await sendEmail(subject, contactEmail, message, name);
  },
});
