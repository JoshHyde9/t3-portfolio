import type { NextPage } from "next";
import NextLink from "next/link";

import SEO from "../components/SEO";

const PageNotFound: NextPage = () => {
  return (
    <>
      <SEO
        title="Page Not Found"
        url="https://joshhyde.me/about"
        description="Uh oh! Either I have done something wrong or you have tried to do something cheeky."
      />

      <div className="flex flex-col justify-center items-center h-96">
        <h1 className="text-4xl text-center text-purple-300 mb-2">Uh oh!</h1>
        <h2 className="text-3xl text-center text-purple-300 mb-6 w-1/2">
          Either I have done something wrong or you have tried to do something
          cheeky.
        </h2>

        <NextLink
          href="/"
          className="text-3xl transition ease-in-out duration-300 relative text-purple-500 hover:text-purple-300"
        >
          Back Home
        </NextLink>
      </div>
    </>
  );
};

export default PageNotFound;
