import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="fade flex justify-center items-center flex-col h-full pb-20">
      <h1 className="text-6xl mb-2">
        👋, I'm <span className="text-purple-300">Josh</span>.
      </h1>
      <h2 className="text-4xl w-4/5 md:w-1/3 2xl:w-1/6 text-center">
        Full Stack developer and likes to build things.
      </h2>
    </div>
  );
};

export default Home;
