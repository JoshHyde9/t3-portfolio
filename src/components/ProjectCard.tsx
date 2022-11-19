/* eslint-disable @next/next/no-img-element */
import Icon from "./Icon";

interface ProjectCardProps {
  techStack: string;
  name: string;
  imageURL: string;
  deployedLink: string;
  githubLink: string;
}

export const ProjectCard = ({
  techStack,
  name,
  imageURL,
  deployedLink,
  githubLink,
}: ProjectCardProps) => {
  return (
    <div className="lg:bg-gradient-to-t lg:from-stone-900 rounded-md mx-auto text-center p-3 pb-0">
      <h1 className="text-4xl font-semibold mb-2 lg:ml-10">{name}</h1>
      <div className="flex flex-col lg:flex-row lg:items-center lg:max-w-screen-lg">
        <div className="mb-2 lg:relative lg:w-52 lg:-rotate-90">
          <div className="lg:absolute lg:w-full">
            <h2 className="w-full h-full">{techStack}</h2>
          </div>
        </div>
        <div className="w-full">
          <img
            className="rounded-b-lg w-full h-auto"
            src={imageURL}
            alt={name}
          />
        </div>
        <div className="flex flex-col items-center lg:gap-2 lg:pl-2 lg:h-60 lg:w-40 lg:justify-evenly">
          <a
            href={deployedLink}
            rel="noreferrer"
            target="_blank"
            className="fancy-button overflow-hidden inline-block lg:my-2"
          >
            <span>Have a geez</span>
          </a>
          <a href={githubLink} rel="noreferrer" target="_blank">
            <Icon icon="github" />
          </a>
        </div>
      </div>
    </div>
  );
};
