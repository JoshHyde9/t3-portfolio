import React from "react";
import { trpc } from "../utils/trpc";
import { Field, Form, Formik } from "formik";

interface GuestBook {
  id?: string;
  username: string;
  comment: string;
}

const Guest = (guest: GuestBook) => {
  return (
    <div className="pb-4 max-w-md">
      <p className="text-lg">{guest.comment}</p>
      <h1 className="text-xl text-purple-300">
        <span className="italic">&#8211; </span>
        {guest.username}
      </h1>
    </div>
  );
};

const GuestBook: React.FC = () => {
  const { data, isLoading, refetch } = trpc.useQuery(["guestbook.getAll"]);
  const { mutate, error } = trpc.useMutation(["guestbook.create"], {
    onSuccess: () => {
      refetch();
    },
  });

  const initialValues: GuestBook = {
    username: "",
    comment: "",
  };

  return (
    <div className="container mx-auto max-w-lg px-2">
      <h1 className="text-3xl text-purple-300 mt-2">Guestbook</h1>
      <p className="leading-tight">
        Please feel free to leave a comment now that you have found this page!
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { resetForm }) => {
          mutate(values);
          resetForm();
        }}
      >
        <Form className="mx-auto w-full mt-10">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2"
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
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2"
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

          <div className="flex flex-wrap -mx-3 mb-6 px-3">
            <button
              className="w-full shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded transition ease-in-out duration-300"
              type="submit"
            >
              Comment
            </button>
          </div>
        </Form>
      </Formik>

      <div className="w-full flex flex-col flex-wrap justify-center">
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
  );
};

export default GuestBook;
