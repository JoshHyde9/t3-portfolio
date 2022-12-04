import type { NextPage } from "next";

import { ProjectCard } from "../components/ProjectCard";

const Projects: NextPage = () => {
  return (
    <div className="container mx-auto max-w-screen-lg flex flex-col gap-10 my-10">
      <h1 className="text-purple-300 text-4xl">Things that I have made</h1>
      <ProjectCard
        techStack="Next.js / tRPC / Prisma / TypeScript"
        githubLink="https://github.com/JoshHyde9/scroggin"
        name="Scroggin"
        imageURL="https://joshhyde9.github.io/cuddly-octo-fortnight/assets/img/scroggin-screenshot.png"
        deployedLink="https://scroggin.au"
      />

      <ProjectCard
        techStack="React.js / Firestore / JavaScript"
        githubLink="https://github.com/JoshHyde9/e-shop"
        name="E-commerce"
        imageURL="https://raw.githubusercontent.com/JoshHyde9/e-shop/main/public/assets/home.png"
        deployedLink="https://e-shop-joshhyde9.vercel.app/"
      />

      <ProjectCard
        techStack="JavaScript / Raw DOM manipulation"
        githubLink="https://github.com/JoshHyde9/i-use-arch-btw"
        name='Arch "Clone"'
        imageURL="https://raw.githubusercontent.com/JoshHyde9/i-use-arch-btw/main/assets/img/i-use-arch-btw.png"
        deployedLink="https://joshhyde9.github.io/i-use-arch-btw/"
      />

      <ProjectCard
        techStack="JavaScript / Raw DOM manipulation"
        githubLink="https://github.com/JoshHyde9/morse-translator/"
        name="Morse Code Translator"
        imageURL="https://raw.githubusercontent.com/JoshHyde9/morse-translator/main/assets/preview.png"
        deployedLink="https://joshhyde9.github.io/morse-translator/"
      />

      <ProjectCard
        techStack="TypeScript / Qwik City / Tailwind"
        githubLink="https://github.com/JoshHyde9/qwik-todos"
        name="Qwik Todos"
        imageURL="https://raw.githubusercontent.com/JoshHyde9/qwik-todos/main/public/preview.png"
        deployedLink="https://qwik-todos.netlify.app/"
      />
    </div>
  );
};

export default Projects;
