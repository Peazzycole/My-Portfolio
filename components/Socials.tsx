import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiGithubLine,
  RiDribbbleLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-xl ">
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiYoutubeLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiDribbbleLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
    </div>
  );
};

export default Socials;
