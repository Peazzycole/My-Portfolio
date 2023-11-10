import Link from "next/link";

import Socials from "./Socials";
import useThemeSwitcher from "@/helper/useThemeSwitcher";
import Image from "next/image";

const Header = () => {

  const [mode, setMode] = useThemeSwitcher()

  return (
    <header className="absolute h-[90px] z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] xsm:bg-none backdrop-blur md:backdrop-blur-none landscape:backdrop-blur landscape:xl:backdrop-blur-none ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Link href={"/"}>
            <p className="text-2xl vsm:text-xl w-max vsm:-mb-[15px] md:text-4xl text-black font-bold dark:text-white">Peace <span className="font-thin">Oghenevwefe</span><span className="text-accent">.</span></p>
          </Link>
          <Socials />
          <button onClick={() => setMode(mode === "light" ? "dark" : "light")} className="bg-white rounded-full p-1 absolute right-4 top-4 md:static hover:scale-105 transition-all duration-300" >
            {mode === 'dark' ?
              <Image
                src='/sun.svg'
                width={20}
                height={20}
                alt="sun"
              />
              :
              <Image
                src='/moon.svg'
                width={20}
                height={20}
                alt="moon"
              />
            }
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
