import { api } from "../utils/api";
import type { NextPage } from "next";
import { Field, Form, Formik } from "formik";

import { IconLink } from "../components/IconLink";
import SEO from "../components/SEO";

interface sendEmail {
  name: string;
  contactEmail: string;
  subject: string;
  message: string;
}

const Contact: NextPage = () => {
  const { mutate, error, isLoading } = api.email.sendEmail.useMutation();

  const initialValues: sendEmail = {
    name: "",
    contactEmail: "",
    subject: "",
    message: "",
  };

  return (
    <>
      <SEO
        title="Contact Me"
        url="https://joshhyde.me/contact"
        description="Here are the best ways of being able to contact me for what ever reason."
      />

      <div className="container mx-auto max-w-2xl px-2">
        <h1 className="text-4xl text-purple-300">Contact me</h1>
        <p>
          Do you have any questions, concerns or just want to say g'day? Here
          are the easiest ways to contact me!
        </p>

        <div className="flex flex-row flex-wrap justify-between mt-10 px-2 md:px-0">
          <IconLink
            icon="linkedin"
            message="Whack me a message on LinkedIn"
            url="https://www.linkedin.com/in/josh-hyde-244324245/"
          />
          <IconLink
            icon="twitter"
            message="Send me a message on Twitter"
            url="https://twitter.com/JoshHyde9"
          />
          <IconLink
            icon="discord"
            message="Jim's Discord Account#1020"
            url="https://discordapp.com/users/197955018828152833/"
          />
          <IconLink
            icon="github"
            message="Tell me I'm doing something wrong"
            url="https://github.com/JoshHyde9"
          />
        </div>

        <p className="mb-2">
          Or you can send me a good ol' fashioned email if you want.
        </p>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values, { resetForm }) => {
            mutate(values);
            resetForm();
          }}
        >
          <Form className="mx-auto w-full">
            <div className="flex flex-wrap mb-6">
              <div className="w-full">
                <label
                  className="block uppercase tracking-wide text-xs font-extrabold mb-2"
                  htmlFor="name"
                >
                  Name:
                </label>
                <Field
                  name="name"
                  className="bg-gray-200 appearance-none border-3 border-purple-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-purple-500 transition ease-in-out duration-300"
                  placeholder="Your name"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-6">
              <div className="w-full">
                <label
                  className="block uppercase tracking-wide text-xs font-extrabold mb-2"
                  htmlFor="contactEmail"
                >
                  Contact Email:
                </label>
                <Field
                  name="contactEmail"
                  className="bg-gray-200 appearance-none border-3 border-purple-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-purple-500 transition ease-in-out duration-300"
                  placeholder="john@doe.com"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-6">
              <div className="w-full">
                <label
                  className="block uppercase tracking-wide text-xs font-extrabold mb-2"
                  htmlFor="subject"
                >
                  Subject:
                </label>
                <Field
                  name="subject"
                  className="bg-gray-200 appearance-none border-3 border-purple-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-purple-500 transition ease-in-out duration-300"
                  placeholder="Subject"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-2">
              <div className="w-full">
                <label
                  className="block uppercase tracking-wide text-xs font-extrabold mb-2"
                  htmlFor="message"
                >
                  Message:
                </label>
                <Field
                  name="message"
                  className="bg-gray-200 appearance-none border-3 border-purple-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-purple-500 transition ease-in-out duration-300"
                  as="textarea"
                  rows="5"
                  placeholder="Message"
                />
              </div>
            </div>
            {!error ? (
              ""
            ) : (
              <div className="flex flex-wrap mb-2">
                {error.data?.code === "BAD_REQUEST" ? (
                  <p className="leading-relaxed italic text-sm text-purple-500">
                    Please fill in all fields.
                  </p>
                ) : (
                  ""
                )}
              </div>
            )}

            <div className="flex flex-wrap mb-6">
              <button
                disabled={isLoading}
                className="flex flex-row justify-center w-full shadow bg-purple-500 text-white font-extrabold py-2 px-4 mb-2 rounded transition ease-in-out duration-300 hover:bg-purple-400 focus:shadow-outline focus:outline-none disabled:cursor-not-allowed"
                type="submit"
              >
                {isLoading ? (
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75 fill-purple-500"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : null}
                Send email
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Contact;
