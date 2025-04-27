import Image from "next/image";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slide() {
  const sliderRef = useRef(null);

  const events = [
    {
      title: "WinnerTakesAll 2025",
      description: "Join the ultimate prize fighting competition today!",
      image: "/assets/png/trick3.png",
      location: "MAHER CENTRE LE40BZ",
      date: "May 24, 2025",
    },
    
    
    // Add more events here if you want
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: events.length > 2, // infinite only if >2
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
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
        {/* Left Section */}
        <div className="md:col-span-4 self-center">
          <h2 className="font-bold text-[24px] md:text-[32px] text-white mt-5 text-center md:text-start">
            Upcoming Events
          </h2>
          <h4 className="font-normal text-sm md:text-base text-white opacity-50 mt-1 text-center md:text-start">
            Get ready for the next big fight! Check out our upcoming events and
            stay in the loop on all the action.
          </h4>

          {/* Desktop Arrows */}
          {events.length > 1 && (
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
          )}
        </div>

        {/* Right Section */}
        <div className="md:col-span-8">
          <div className={`grid ${events.length > 1 ? "grid-cols-2" : "grid-cols-2"} gap-4`}>
            {events.length > 1 ? (
              <Slider {...settings} ref={sliderRef} className="col-span-2">
                {events.map((event, index) => (
                  <div key={index} className="px-2">
                    <EventCard event={event} />
                  </div>
                ))}
              </Slider>
            ) : (
              <div className="px-2 col-span-2 flex ">
                <EventCard event={events[0]} />
              </div>
            )}
          </div>

          {/* Mobile Arrows */}
          {events.length > 1 && (
            <div className="flex md:hidden gap-3 mt-6 justify-center">
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
          )}
        </div>
      </div>
    </div>
  );
}

// Event Card component
function EventCard({ event }) {
  return (
    <div className="bg-[#0F0F0F] rounded-[30px] p-4">
      <Image
        src={event.image}
        alt={event.title}
        width={430}
        height={180}
        className="h-[180px] w-full object-cover rounded-[20px]"
      />
      <div className="mt-4">
        <p className="font-bold text-base text-white">{event.title}</p>
        <p className="font-normal text-white opacity-50 text-[12px] line-clamp-1 mt-1">
          {event.description}
        </p>

        <div className="flex gap-2 mt-3">
          <Image
            src="/assets/svg/loc.svg"
            alt="location"
            width={12}
            height={16}
          />
          <p className="font-bold text-[12px] text-white">{event.location}</p>
        </div>

        <p className="font-normal text-[12px] text-white opacity-50 mt-2">
          {event.date}
        </p>
      </div>
    </div>
  );
}
