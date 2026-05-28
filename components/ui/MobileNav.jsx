"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { CiMenuFries } from "react-icons/ci";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "projects",
    path: "/projects",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>

      {/* menu button */}
      <SheetTrigger className="flex justify-center items-center">

        <CiMenuFries className="text-[32px] text-accent hover:text-white transition-all duration-300" />

      </SheetTrigger>

      {/* mobile menu */}
      <SheetContent
        side="right"
        className="
          flex flex-col
          bg-[#111118]
          border-l border-white/10
          px-0
        "
      >

        {/* logo */}
        <div className="mt-20 mb-14 text-center">

          <Link href="/">

            <h1 className="text-3xl font-semibold tracking-wide">
              Bhavani Singh
              <span className="text-accent">.</span>
            </h1>

          </Link>

        </div>

        {/* nav */}
        <nav className="flex flex-col gap-2 px-6">

          {links.map((link, index) => {

            const isActive = link.path === pathname;

            return (
              <SheetClose asChild key={index}>

                <Link
                  href={link.path}
                  className={`
                    group
                    relative
                    flex items-center
                    px-5 py-4
                    rounded-xl
                    text-lg
                    capitalize
                    font-medium
                    transition-all duration-300
                    ${
                      isActive
                        ? "bg-accent text-primary"
                        : "text-white/80 hover:bg-white/5 hover:text-accent"
                    }
                  `}
                >

                  {link.name}

                  {/* active indicator */}
                  {isActive && (
                    <span
                      className="
                        absolute right-5
                        w-2 h-2
                        rounded-full
                        bg-primary
                      "
                    ></span>
                  )}

                </Link>

              </SheetClose>
            );
          })}

        </nav>

      </SheetContent>

    </Sheet>
  );
};

export default MobileNav;