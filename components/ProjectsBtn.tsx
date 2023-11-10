import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import useThemeSwitcher from "@/helper/useThemeSwitcher";


const ProjectsBtn = () => {

  const [mode] = useThemeSwitcher()

  return (
    <div className="mx-auto xl:mx-0 z-20">
      <Link
        href="/work"
        className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-no-repeat bg-contain group dark:bg-circleStarDark"
      >
        <Image
          src="/rounded-text-dark.png"
          width={141}
          height={148}
          alt=""
          className="w-full h-full animate-spin-slow max-w-[141px] max-h-[148px] dark:hidden"
        />
        <Image
          src="/rounded-text.png"
          width={141}
          height={148}
          alt=""
          className="w-full h-full animate-spin-slow max-w-[141px] max-h-[148px] hidden dark:block"
        />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300 dark:text-white" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
