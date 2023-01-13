import SparkPost from "sparkpost";
import { env } from "../env/server.mjs";

const client = new SparkPost(env.SPARKPOST_API_KEY);

export const sendEmail = async (
  name: string,
  contactEmail: string,
  subject: string,
  message: string
) => {
  await client.transmissions.send({
    content: {
      from: `${name} <no-reply.joshhyde.me>`,
      subject,
      html: `<html><body><p>Contact email: ${contactEmail}</p><p>${message}</p></body></html>`,
    },
    recipients: [{ address: env.MY_EMAIL_ADDRESS }],
  });
};
