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
      <Link href={"https://github.com/Peazzycole"} target="_blank" className="hover:text-accent transition-all duration-300 hover:-translate-y-1 hover:scale-125">
        <RiGithubFill />
      </Link>
      <Link href={"https://www.linkedin.com/in/peazzycole/"} target="_blank" className="hover:text-accent transition-all duration-300 text-[#0A66C2] hover:-translate-y-1 hover:scale-125">
        <RiLinkedinFill />
      </Link>
      <Link href={"https://twitter.com/Peazzycole1"} target="_blank" className="hover:text-accent transition-all duration-300 text-[#55ACEE] hover:-translate-y-1 hover:scale-125">
        <RiTwitterFill />
      </Link>
      <Link href={"https://www.instagram.com/peazzycole/"} target="_blank" className="hover:text-accent transition-all duration-300 text-[#E4405F] hover:-translate-y-1 hover:scale-125">
        <RiInstagramLine />
      </Link>
      <Link href={"https://wa.me/+2348023524572"} target="_blank" className="hover:text-accent transition-all duration-300 text-[#55966d] hover:-translate-y-1 hover:scale-125">
        <RiWhatsappFill />
      </Link>
    </div>
  );
};

export default Socials;
