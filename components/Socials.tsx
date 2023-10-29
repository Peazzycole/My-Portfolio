import Link from "next/link";

import {
  RiInstagramLine,
  RiGithubFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiWhatsappFill
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-xl ">
      <Link href={"https://github.com/Peazzycole"} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiGithubFill />
      </Link>
      <Link href={"https://www.linkedin.com/in/peazzycole/"} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiLinkedinFill />
      </Link>
      <Link href={"https://twitter.com/Peazzycole1"} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiTwitterFill />
      </Link>
      <Link href={"https://www.instagram.com/peazzycole/"} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={"https://wa.me/+2348023524572"} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiWhatsappFill />
      </Link>
    </div>
  );
};

export default Socials;
