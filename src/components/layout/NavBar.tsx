import { useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";

const MobileNav = ({ open, setOpen }: any) => {
  const router = useRouter();

  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-neutral-900 transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex flex-col mt-9 ml-4">
        <NextLink href="/">
          <a
            className={`text-xl font-normal my-4 ${
              router.asPath === "/" ? "text-purple-500" : ""
            }`}
            onClick={() => setOpen(!open)}
          >
            Home
          </a>
        </NextLink>
        <NextLink href="/about">
          <a
            className={`text-xl font-normal my-4 ${
              router.asPath === "/about" ? "text-purple-500" : ""
            }`}
            onClick={() => setOpen(!open)}
          >
            About
          </a>
        </NextLink>
        <NextLink href="/contact">
          <a
            className={`text-xl font-normal my-4 ${
              router.asPath === "/contact" ? "text-purple-500" : ""
            }`}
            onClick={() => setOpen(!open)}
          >
            Contact
          </a>
        </NextLink>
        <NextLink href="/guestbook">
          <a
            className={`text-xl font-normal my-4 ${
              router.asPath === "/guestbook" ? "text-purple-500" : ""
            }`}
            onClick={() => setOpen(!open)}
          >
            Guestbook
          </a>
        </NextLink>
      </div>
    </div>
  );
};

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex px-4 py-4 h-20 items-center">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-full flex justify-end items-center md:mr-10">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-slate-300 rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-slate-300 rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-slate-300 rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>

        <div className="hidden mt-10 md:flex">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/guestbook">Guestbook</NavLink>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }: any) => {
  const router = useRouter();

  return (
    <a
      href={to}
      className={`mx-4 transition ease-in-out duration-300 relative ${
        router.asPath === to
          ? "text-purple-500"
          : "stroke  hover:text-purple-300"
      }`}
    >
      {children}
    </a>
  );
};

export default NavBar;
