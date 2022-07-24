import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Josh Hyde | Full Stack Developer</title>
        <meta
          property="title"
          content="Josh Hyde | Full Stack Developer"
          key="title"
        />
        <meta
          property="og:title"
          content="Josh Hyde | Full Stack Developer"
          key="title"
        />
        <meta
          name="description"
          content="A handy dandy website for displaying my accomplishments, skills, experiences, and attributes"
        />
        <meta
          name="og:description"
          content="A handy dandy website for displaying my accomplishments, skills, experiences, and attributes"
        />
        <meta name="author" content="Josh Hyde" />
        <meta name="og:author" content="Josh Hyde" />
        <meta property="image" content="/apple-touch-icon.png" />
        <meta property="og:image" content="/apple-touch-icon.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <div className="fade flex justify-center items-center flex-col h-full pb-20">
        <h1 className="text-6xl mb-2">
          👋, I'm <span className="text-purple-300">Josh</span>.
        </h1>
        <h2 className="text-4xl w-4/5 md:w-1/3 2xl:w-1/6 text-center">
          Full Stack developer that likes to build things.
        </h2>
      </div>
    </>
  );
};

export default Home;
