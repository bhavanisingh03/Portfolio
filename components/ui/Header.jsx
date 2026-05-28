import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-6 xl:py-8 text-white">

      <div className="container mx-auto flex justify-between items-center">

        {/* logo */}
        <Link href="/">
          <h1 className="text-3xl xl:text-4xl font-semibold tracking-wide">
            Bhavani Singh
            <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop navigation */}
        <div className="hidden xl:flex items-center gap-8">

          <Nav />

          <Link href="/contact">

            <Button className="ml-2">
              Hire Me
            </Button>

          </Link>

        </div>

        {/* mobile navigation */}
        <div className="xl:hidden">
          <MobileNav />
        </div>

      </div>

    </header>
  );
};

export default Header;