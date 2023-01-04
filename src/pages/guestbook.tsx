import type { NextPage } from "next";
import { api } from "../utils/api";
import { Field, Form, Formik } from "formik";
import Guest, { GuestBook } from "../components/Guest";
import SEO from "../components/SEO";
import { useState } from "react";

interface Error {
  code: string;
  minimum: number;
  type: string;
  inclusive: boolean;
  message: string;
  path: string[];
}

const GuestBook: NextPage = () => {
  const [errors, setErrors] = useState<string[]>([]);

  const utils = api.useContext();
  const { data, isLoading } = api.guestbook.getAll.useQuery();
  const { mutate, isSuccess } = api.guestbook.create.useMutation({
    onSuccess: () => {
      utils.guestbook.getAll.invalidate();
      setErrors([]);
    },
    onError: (error) => {
      const epic: Error[] = JSON.parse(error.message);
      setErrors(epic.map((e: Error) => e.message));
    },
  });

  const initialValues: GuestBook = {
    username: "",
    comment: "",
  };

  return (
    <>
      <SEO
        title="Guestbook"
        url="https://joshhyde.me/guestbook"
        description="Just like a guestbook at a wedding, feel free to write what every you like. Make me laugh, cry or somewhere in-between."
      />

      <div className="container mx-auto max-w-2xl px-3">
        <h1 className="text-4xl text-purple-300 mt-2">Guestbook</h1>
        <p className="leading-tight">
          Please feel free to leave a comment now that you have found this page!
        </p>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values, { resetForm }) => {
            mutate(values);

            if (isSuccess) {
              resetForm();
            }
          }}
        >
          <Form className="mx-auto w-full mt-10">
            <div className="flex flex-wrap mb-6">
              <div className="w-full">
                <label
                  className="block uppercase tracking-wide text-xs font-extrabold mb-2"
                  htmlFor="username"
                >
                  Name:
                </label>
                <Field
                  name="username"
                  className="bg-gray-200 appearance-none border-3 border-purple-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-purple-500 transition ease-in-out duration-300"
                  placeholder="Bill Gates"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-2">
              <div className="w-full">
                <label
                  className="block uppercase tracking-wide text-xs font-extrabold mb-2"
                  htmlFor="comment"
                >
                  Comment:
                </label>
                <Field
                  name="comment"
                  className="bg-gray-200 appearance-none border-3 border-purple-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-purple-500 transition ease-in-out duration-300"
                  as="textarea"
                  rows="5"
                  placeholder="This is a really cool website"
                />
              </div>
            </div>

            {errors && (
              <div className="flex flex-wrap mb-2">
                <p className="leading-relaxed italic text-sm text-purple-500">
                  {errors[0]}
                </p>
              </div>
            )}

            <div className="flex flex-wrap mb-6">
              <button
                className="w-full shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-extrabold py-2 px-4 rounded transition ease-in-out duration-300"
                type="submit"
              >
                Comment
              </button>
            </div>
          </Form>
        </Formik>

        <div className="mx-auto flex flex-col flex-wrap justify-center">
          {isLoading ? (
            <div className="flex justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-7 w-7 text-white"
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
            </div>
          ) : (
            data &&
            data.map((guest) => {
              return <Guest key={guest.id} {...guest} />;
            })
          )}
        </div>
      </div>
    </>
  );
};

export default GuestBook;
