import NextLink from "next/link";
import Icon from "./Icon";

import { icons } from "./Icon";

interface IconLinkProps {
  url: string;
  message: string;
  icon: keyof icons;
}

export const IconLink = ({ url, message, icon }: IconLinkProps) => {
  return (
    <div className="flex flex-col items-center w-36 mb-4">
      <NextLink href={url}>
        <Icon icon={icon} />
      </NextLink>
      <p className="text-center">{message}</p>
    </div>
  );
};
