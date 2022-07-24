import { IconPaths } from "../utils/iconLib";

export interface icons {
  twitter: { path: string; viewBox: string };
  github: { path: string; viewBox: string };
  linkedin: { path: string; viewBox: string };
  discord: { path: string; viewBox: string };
}

interface IconProps {
  icon: keyof icons;
  className?: string;
}

const defaultStyles =
  "mb-1 h-10 fill-purple-500 hover:fill-purple-300 transition ease-in-out duration-300";

const Icon = ({ icon, className }: IconProps) => {
  return (
    <svg
      className={className ? className : defaultStyles}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={IconPaths[icon].viewBox}
    >
      <path d={IconPaths[icon].path} />
    </svg>
  );
};

export default Icon;
