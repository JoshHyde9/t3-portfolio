import Head from "next/head";

interface SEOProps {
  title: string;
  url: string;
}

const SEO = ({ title, url }: SEOProps) => {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>{title}</title>
      <meta property="title" content={title} key="title" />
      <meta property="og:title" content={title} key="title" />
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
      <meta property="url" content={url} />
      <meta property="og:url" content={url} />
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
  );
};

export default SEO;
