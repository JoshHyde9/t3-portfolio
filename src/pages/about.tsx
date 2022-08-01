import type { NextPage } from "next";
import NextLink from "next/link";
import SEO from "../components/SEO";

interface ILibArray {
  array: [string, string, string, string];
}

const KnowledgeRow = ({ libraries }: { libraries: ILibArray }) => {
  return (
    <div className="flex flex-row mt-3 w-full justify-center text-center">
      {libraries.array.map((library) => {
        return (
          <p key={library} className="w-1/4">
            {library}
          </p>
        );
      })}
    </div>
  );
};

const About: NextPage = () => {
  return (
    <>
      <SEO
        title="About Me | Josh Hyde"
        url="https://joshhyde.me/about"
        description="Want to learn more about me as a person or my skills? Funnily enough, this page is the best way to found that out."
      />

      <div className="container mx-auto max-w-2xl px-2">
        <h1 className="text-4xl text-purple-300">About me</h1>
        <p>
          For those who may not know, my name is Josh, but people on the
          internet call me Jim. I am 20 years old and was born in Echuca,
          Victoria but now residing on the Mornington Peninsula. I am a
          passionate developer and have a big emphasis on producing quality
          products.
        </p>
        &nbsp;
        <p>
          I am a year 12 graduate and have enrolled myself into HarvardX's
          "Computer Science for Web Programming" and have completed the Computer
          Science section of the course and learnt a lot. I am glad to be able
          to use what I have learned and put that knowledge into my projects. If
          you're interested in working together or want to ask a question,
          please do not hesitate to{" "}
          <NextLink href="/contact">
            <a className="transition ease-in-out duration-300 text-purple-500 hover:text-purple-300">
              contact me
            </a>
          </NextLink>
          .
        </p>
        &nbsp;
        <div className="container mx-auto">
          <KnowledgeRow
            libraries={{
              array: ["TypeScript", "GraphQL", "Next.js", "Node.js"],
            }}
          />
          <KnowledgeRow
            libraries={{
              array: ["tRPC", "React.js", "JavaScript", "Express.js"],
            }}
          />
          <KnowledgeRow
            libraries={{
              array: ["MongoDB", "Firebase", "PostgreSQL", "Redis"],
            }}
          />
          <KnowledgeRow
            libraries={{
              array: ["TypeORM", "Prisma", "TailwindCSS", "Python"],
            }}
          />
        </div>
      </div>
    </>
  );
};

export default About;
