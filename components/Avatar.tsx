import Image from "next/image";

const Avatar = () => {
  return (
    <div className="">
      <Image
        src={"/avatarr.png"}
        width={737}
        height={678}
        alt=""
        className="translate-z-0 w-full h-full"
        priority
      />
    </div>
  );
};

export default Avatar;
