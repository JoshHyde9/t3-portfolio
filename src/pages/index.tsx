import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="fade flex justify-center items-center flex-col h-full pb-20">
      <h1 className="text-6xl mb-2">
        👋, I'm <span className="text-purple-300">Josh</span>.
      </h1>
      <h2 className="text-4xl w-1/3 text-center">
        Full Stack developer and I like to build things.
      </h2>
    </div>
  );
};

export default Home;
