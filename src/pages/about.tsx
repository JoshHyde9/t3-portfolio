import type { NextPage } from "next";
import useEmblaCarousel from "embla-carousel-react";
import classNames, { ClassNamesOptionsType } from "embla-carousel-class-names";

import NextLink from "next/link";
import NextImage from "next/image";

import SEO from "../components/SEO";

import rockGarden from "../assets/img/rock-garden.png";
import smallJump from "../assets/img/small-jump.png";
import stepDown from "../assets/img/step-down.png";

interface ILibArray {
  array: [string, string, string, string];
}

const slides = [rockGarden, smallJump, stepDown];
const mediaByIndex = (index: number) => slides[index % slides.length];

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
  const classOptions: ClassNamesOptionsType = {
    selected: "",
    draggable: "cursor-grab",
    dragging: "cursor-grabbing",
  };

  const [viewportRef] = useEmblaCarousel(
    {
      skipSnaps: false,
      loop: true,
      startIndex: 1,
    },
    [classNames(classOptions)]
  );

  return (
    <>
      <SEO
        title="About Me"
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
          <NextLink
            className="transition ease-in-out duration-300 text-purple-500 hover:text-purple-300"
            href="/contact"
          >
            contact me
          </NextLink>
          .
        </p>
        <h2 className="text-3xl text-purple-300 mt-4">My abilities</h2>
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
        <h2 className="text-3xl text-purple-300 mt-4">Do I go outside?</h2>
        <p className="mb-1">
          Believe it or not, I do! I am a fien for anything on wheels,
          especially bikes. <br /> When I was camping as a little kid, I saw a
          bloke send himself down a mountain on a bike and I thought "That looks
          like fun!" and sure enough I was hooked and do not plan on giving up
          on it any time soon.
        </p>
        <div className="overflow-hidden">
          <div className="embla__viewport" ref={viewportRef}>
            <div className="embla__container flex">
              {slides.map((img, index: number) => {
                return (
                  <div className="embla__slide flex-carousel" key={index}>
                    <div className="embla__slide__inner">
                      <NextImage
                        loading="lazy"
                        className="embla__slide__img"
                        src={mediaByIndex(index)}
                        alt={img.src}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
