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
        <meta name="og:site_name" content="Josh Hyde | Full Stack Developer" />
        <meta name="author" content="Josh Hyde" />
        <meta name="og:author" content="Josh Hyde" />
        <meta property="url" content="https://joshhyde.me/" />
        <meta property="og:url" content="https://joshhyde.me/" />
        <meta property="type" content="website" />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:card"
          content="https://avatars.githubusercontent.com/u/40751087?v=4"
        />
        <meta name="twitter:site" content="@JoshHyde9" />
        <meta
          property="image"
          content="https://avatars.githubusercontent.com/u/40751087?v=4"
        />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/40751087?v=4"
        />
        <meta property="image:alt" content="Josh Hyde" />
        <meta property="og:image:alt" content="Josh Hyde" />
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
