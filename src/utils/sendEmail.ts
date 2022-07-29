import SparkPost from "sparkpost";
import { env } from "../server/env.mjs";

const client = new SparkPost(env.SPARKPOST_API_KEY);

export const sendEmail = async (
  subject: string,
  message: string,
  name: string
) => {
  await client.transmissions.send({
    content: {
      from: `${name} <josh@hello.joshhyde.me>`,
      subject,
      html: message,
    },
    recipients: [{ address: env.MY_EMAIL_ADDRESS }],
  });
};
