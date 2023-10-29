import Link from "next/link";

import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Link href={"/"}>
            <p className="text-2xl md:text-4xl text-white font-bold">Peace <span className="font-thin">Oghenevwefe</span><span className="text-accent">.</span></p>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
