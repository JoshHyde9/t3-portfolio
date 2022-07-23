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
    <div key={guest.id}>
      <h1 className="text-4xl">{guest.username}</h1>
      <p>{guest.comment}</p>
    </div>
  );
};

const GuestBook: React.FC = () => {
  const { mutate, error } = trpc.useMutation(["guestbook.create"]);
  const { data, isLoading } = trpc.useQuery(["guestbook.getAll"]);

  console.log(data);

  const initialValues: GuestBook = {
    username: "",
    comment: "",
  };

  return (
    <div className="container mx-auto">
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          mutate(values);
        }}
      >
        <Form>
          <Field name="username" placeholder="Username..." />
          <Field
            name="comment"
            component="textarea"
            placeholder="This is a really cool site..."
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      {error
        ? error.data?.code === "BAD_REQUEST"
          ? "Please fill in all fields."
          : ""
        : ""}

      <div className="flex flex-wrap flex-row justify-center">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          data &&
          data.map((guest) => {
            return Guest(guest);
          })
        )}
      </div>
    </div>
  );
};

export default GuestBook;
