import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Shirt Customizer",
          path: "/tshirt.jpg",
          url: "https://shirt-customizer-ten.vercel.app/",
          isComingSoon: false
        },
        {
          title: "Dashboard",
          path: "/dashboard.png",
          url: "https://dashboard-iota-green.vercel.app/",
          isComingSoon: false
        },
        {
          title: "Novaturas",
          path: "/nov2.png",
          url: "https://www.novaturas.lt/",
          isComingSoon: false
        },
        {
          title: "React Meals",
          path: "/meal.png",
          url: "https://comforting-cuchufli-ba1d7a.netlify.app/",
          isComingSoon: false
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
          url: "",
          isComingSoon: true
        },
        {
          title: "title",
          path: "/thumb1.jpg",
          url: "",
          isComingSoon: true
        },
        {
          title: "title",
          path: "/thumb2.jpg",
          url: "",
          isComingSoon: true
        },
        {
          title: "title",
          path: "/thumb3.jpg",
          url: "",
          isComingSoon: true
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 ">
            {slide.images.map((image, i) => (
              <div
                key={i}
                className={`${image.isComingSoon ? 'pointer-events-none cursor-not-allowed opacity-30' : 'cursor-pointer'} relative rounded-ls overflow-hidden flex items-center justify-center group`}
              >
                <Link href={image.url} target="_blank">
                  <div className="flex items-center justify-center relative overflow-hidden group h-[100px] sm:h-[200px]">
                    <Image src={image.path} alt="" width={500} height={300} className="object-cover h-full" />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                    <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                      <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em] text-white">
                        <div className="delay-100">LIVE</div>
                        <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                          PROJECT
                        </div>
                        <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                          <BsArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
