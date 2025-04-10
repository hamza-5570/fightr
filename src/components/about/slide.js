import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const features = [
  {
    icon: "/assets/svg/fea.svg",
    title: "Real-World Ranking & Growth",
    description:
      "Fightr connects fighters’ real-life achievements to an evolving ranking system, driving self-improvement and recognition within the fighting community.",
  },
  {
    icon: "/assets/svg/fea2.svg",
    title: "Trainer Zone:",
    description:
      "Workouts and exercises tailored specifically for fighters with a daily routine plan.",
  },
  {
    icon: "/assets/svg/fea3.svg",
    title: "Community Engagement",
    description:
      "Users can discover, connect with, and challenge fellow fighters—locally or in other cities—to elevate their rankings and gain visibility in the fighting world.",
  },
];

export default function Slide() {
  const settings = {
    centerMode: true,
    centerPadding: "30px",
    slidesToShow: 3,
    speed: 500,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: "30px",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-10 ">
      <Slider {...settings}>
        {features.map((feature, index) => (
          <div key={index} className="">
            <div className="border-[1px] border-[#191919] hover:bg-[#0A0A0A] cursor-pointer group p-5 md:p-8 h-[250px] xl:h-[300px]">
              <div className="border-[4px] border-[#141414] group-hover:border-[#690000] group-hover:bg-[#FF0000] cursor-pointer rounded-2xl w-[52px] h-[52px]">
                <Image
                  src={feature.icon}
                  alt=""
                  width={24}
                  height={24}
                  className="mx-auto mt-2"
                />
              </div>
              <h2 className="font-bold text-[20px] lg:text-[22px] text-white mt-3">
                {feature.title}
              </h2>
              <h4 className="font-normal text-sm lg:text-[15px] text-white opacity-50 mt-1 line-clamp-4">
                {feature.description}
              </h4>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
