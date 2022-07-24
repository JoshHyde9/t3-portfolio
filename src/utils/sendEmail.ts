import SparkPost from "sparkpost";

const client = new SparkPost(process.env.SPARKPOST_API_KEY);

export const sendEmail = async (subject: string, message: string) => {
  await client.transmissions.send({
    content: {
      from: "Josh@hello.joshhyde.me",
      subject,
      html: message,
    },
    recipients: [{ address: process.env.MY_EMAIL_ADDRESS! }],
  });
};
