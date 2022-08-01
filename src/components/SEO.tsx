import Head from "next/head";

interface SEOProps {
  title: string;
  url: string;
  description: string;
}

const SEO = ({ title, url, description }: SEOProps) => {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>{title}</title>
      <meta property="title" content={title} key="title" />
      <meta property="og:title" content={title} key="title" />
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />
      <meta
        name="keywords"
        content="Josh, Hyde, Josh Hyde, full, stack, portfolio, full stack portfolio, developer, full stack developer"
      />
      <meta name="og:site_name" content="Josh Hyde | Full Stack Developer" />
      <meta name="author" content="Josh Hyde" />
      <meta name="og:author" content="Josh Hyde" />
      <meta property="url" content={url} />
      <meta property="og:url" content={url} />
      <meta property="type" content="website" />
      <meta property="og:type" content="website" />
      <meta name="twitter:site" content="@JoshHyde9" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="https://avatars.githubusercontent.com/u/40751087?v=4"
      />
      <meta name="twitter:card" content="app" />
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
