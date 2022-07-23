import type { NextPage } from "next";
import { trpc } from "../utils/trpc";
import { Field, Form, Formik } from "formik";

interface createGuestBook {
  username: string;
  comment: string;
}

const Home: NextPage = () => {
  const { mutate } = trpc.useMutation(["guestbook.create"]);

  const initialValues: createGuestBook = {
    username: "",
    comment: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        console.log(values);
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
  );
};

export default Home;
