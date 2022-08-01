import type { NextPage } from "next";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SEO from "../components/SEO";

const About: NextPage = () => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    fetch("about.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  });

  return (
    <>
      <SEO
        title="About Me | Josh Hyde"
        url="https://joshhyde.me/about"
        description="Want to learn more about me as a person or my skills? Funnily enough, this page is the best way to found that out."
      />

      <div className="container mx-auto max-w-2xl px-2">
        <ReactMarkdown
          components={{
            h1: ({ node, ...props }) => (
              <h1 className="text-4xl text-purple-300" {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h2 className="text-3xl text-purple-300" {...props} />
            ),
            hr: ({ node, ...props }) => (
              <hr className="border-t-1 border-neutral-600 m-2" {...props} />
            ),
            a: ({ node, ...props }) => (
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:text-purple-300 transition ease-in-out duration-300"
                {...props}
              />
            ),

            table: ({ node, ...props }) => (
              <table
                className="w-full table-auto text-center md:text-left"
                {...props}
              />
            ),
            td: ({ node, isHeader = false, ...props }) => (
              //@ts-ignore
              <td className="py-1" {...props} />
            ),
          }}
          children={content}
          remarkPlugins={[remarkGfm]}
        />
      </div>
    </>
  );
};

export default About;
