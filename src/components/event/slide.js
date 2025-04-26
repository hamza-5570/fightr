import Image from "next/image";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slide() {
  const sliderRef = useRef(null);

  const events = [
    {
      title: "The Ultimate Showdown 2025",
      description: "Don't miss out on the most anticipated event of the year! The Ultimate Showdown",
      image: "/assets/png/trick.png",
      location: "Fighter Arena, 456 Combat Road, Knockout City, 12345",
      date: "May 15, 2025",
    },
    {
      title: "Knockout Night Championship",
      description: "The fiercest fighters will step into the ring at Knockout Night Championship",
      image: "/assets/png/trick2.png",
      location: "Gladiator Stadium, 789 Battle Ave, Flat City, 67890",
      date: "May 15, 2025",
    },
    {
        title: "WinnerTakesAll 2025",
        description: "Join the ultimate prize fighting competition today!",
        image: "/assets/png/trick3.png",
        location: "MAHER CENTRE LE40BZ",
        date: "May 24, 2025",
      },
      
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        
        {
          breakpoint: 1024, // under 640px
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
  };

  return (
    <div className="w-[90%] 2xl:max-w-2xl mx-auto pt-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-4 self-center">
          <h2 className="font-bold text-[24px] md:text-[32px] text-white mt-5 text-center md:text-start">
            Upcoming Events
          </h2>
          <h4 className="font-normal text-sm md:text-base text-white opacity-50 mt-1 text-center md:text-start">
            Get ready for the next big fight! Check out our upcoming events and
            stay in the loop on all the action.
          </h4>

          <div className="hidden md:flex gap-3 mt-6 justify-center md:justify-start">
            <Image
              src="/assets/svg/left.svg"
              alt="prev"
              width={32}
              height={32}
              className="cursor-pointer"
              onClick={() => sliderRef.current?.slickPrev()}
            />
            <Image
              src="/assets/svg/right.svg"
              alt="next"
              width={32}
              height={32}
              className="cursor-pointer"
              onClick={() => sliderRef.current?.slickNext()}
            />
          </div>
        </div>

        <div className="md:col-span-8">
          <Slider {...settings} ref={sliderRef}>
            {events.map((event, index) => (
              <div key={index} className="px-2">
                <div className="bg-[#0F0F0F] rounded-[30px] p-4">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={430}
                    height={180}
                    className="h-[180px]"
                  />
                  <div className="mt-4">
                    <p className="font-bold text-base">{event.title}</p>
                    <p className="font-normal text-white opacity-50 text-[12px] line-clamp-1 mt-1">
                      {event.description}
                    </p>

                    <div className="flex gap-2 mt-3">
                      <Image
                        src={"/assets/svg/loc.svg"}
                        alt="location"
                        width={12}
                        height={16}
                      />
                      <p className="font-bold text-[12px] text-white">
                        {event.location}
                      </p>
                    </div>

                    <p className="font-normal text-[12px] text-white opacity-50 mt-2">
                      {event.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className="flex md:hidden gap-3 mt-6 justify-center md:justify-start">
            <Image
              src="/assets/svg/left.svg"
              alt="prev"
              width={32}
              height={32}
              className="cursor-pointer"
              onClick={() => sliderRef.current?.slickPrev()}
            />
            <Image
              src="/assets/svg/right.svg"
              alt="next"
              width={32}
              height={32}
              className="cursor-pointer"
              onClick={() => sliderRef.current?.slickNext()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
