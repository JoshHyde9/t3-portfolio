import type { NextPage } from "next";
import { trpc } from "../utils/trpc";
import { Field, Form, Formik } from "formik";

interface createGuestBook {
  username: string;
  comment: string;
}

const GuestBook: NextPage = () => {
  const { mutate, error } = trpc.useMutation(["guestbook.create"]);
  const guests = trpc.useQuery(["guestbook.getAll"], {});

  const initialValues: createGuestBook = {
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
      .
    </div>
  );
};

export default GuestBook;
