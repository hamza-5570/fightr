"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const events = [
  {
    image: "/assets/png/trick.png",
    title: "The Ultimate Showdown 2025",
    description: "Don’t miss out on the most anticipated event of the year!",
    locationIcon: "/assets/svg/loc.svg",
    location: "Fightr Arena, 456 Combat Road, Knockout City, 12345",
    date: "May 15, 2025",
  },
  {
    image: "/assets/png/trick2.png",
    title: "Knockout Night Championship",
    description:
      "The fiercest fighters will step into the ring at Knockout Night Championship.Experience high-intensity action and electrifying performances as contenders battle for the ultimate victory.",

    locationIcon: "/assets/svg/loc.svg",
    location: "Gladiator Stadium, 789 Battle Ave, Fist City, 67890",
    date: "May 15, 2025",
  },
  {
    image: "/assets/png/trick3.png",
    title: "Champions Clash: Battle Royale",
    description:
      "Join us for the Champions Clash: Battle Royale, where legends are made and rivalries reignite. Watch as the best of the best go head-to-head in a night filled with explosive action and dramatic finishes!",

    locationIcon: "/assets/svg/loc.svg",
    location: "Victory Arena, 321 Warrior Way, Clash Town, 23456",
    date: "June 20, 2025",
  },
  {
    image: "/assets/png/trick4.png",
    title: "Rumble in the Ring",
    description:
      "Get ready for Rumble in the Ring, an event that promises to deliver jaw-dropping punches and breathtaking maneuvers. This is your chance to see the future stars of the fighting world make their mark!",
    locationIcon: "/assets/svg/loc.svg",
    location: "Titan Dome, 654 Power Blvd, Strike City, 34567",
    date: "June 27, 2025",
  },
  {
    image: "/assets/png/trick5.png",
    title: "The Grand Slam Showdown",
    description:
      "Prepare for The Grand Slam Showdown, a spectacular event where the finest fighters will face off in a series of thrilling matches. With unexpected twists and fan favorites, this showdown promises to keep you on the edge of your seat!",
    locationIcon: "/assets/svg/loc.svg",
    location: "Champion's Arena, 987 Glory Rd, Victoryville, 45678",
    date: "July 15, 2025",
  },
  {
    image: "/assets/png/trick6.png",
    title: "Battle of the Titans",
    description:
      "Don’t miss the Battle of the Titans, an epic event where the strongest contenders clash for supremacy. Witness unmatched skill and heart-stopping action as fighters push their limits in pursuit of greatness!",
    locationIcon: "/assets/svg/loc.svg",
    location: "Warrior's Arena, 111 Titan St, Conquer City, 56789",
    date: "August 5, 2025",
  },
  {
    image: "/assets/png/trick7.png",
    title: "Legends Unleashed",
    description:
      "Join us for Legends Unleashed, a thrilling event that brings together iconic champions from across the ages. Experience the intensity of legendary matchups and witness history in the making as they vie for glory!",
    locationIcon: "/assets/svg/loc.svg",
    location: "Hero's Field, 222 Legacy Ave, Epic Town, 67890",
    date: "September 20, 2025",
  },
  {
    image: "/assets/png/trick8.png",
    title: "Rise of the Warriors",
    description:
      "Step into the arena for the Rise of the Warriors, a breathtaking event showcasing emerging talent and seasoned fighters alike. Feel the adrenaline as competitors battle fiercely for recognition and the ultimate title!",
    locationIcon: "/assets/svg/loc.svg",
    location: "Victory Dome, 333 Conquest Blvd, Champion City, 78901",
    date: "October 10, 2025",
  },
  {
    image: "/assets/png/trick.png",
    title: "The Ultimate Showdown 2025",
    description: "Don’t miss out on the most anticipated event of the year!",
    locationIcon: "/assets/svg/loc.svg",
    location: "Fightr Arena, 456 Combat Road, Knockout City, 12345",
    date: "May 15, 2025",
  },
  {
    image: "/assets/png/trick2.png",
    title: "Knockout Night Championship",
    description:
      "The fiercest fighters will step into the ring at Knockout Night Championship.Experience high-intensity action and electrifying performances as contenders battle for the ultimate victory.",

    locationIcon: "/assets/svg/loc.svg",
    location: "Gladiator Stadium, 789 Battle Ave, Fist City, 67890",
    date: "May 15, 2025",
  },
  {
    image: "/assets/png/trick3.png",
    title: "Champions Clash: Battle Royale",
    description:
      "Join us for the Champions Clash: Battle Royale, where legends are made and rivalries reignite. Watch as the best of the best go head-to-head in a night filled with explosive action and dramatic finishes!",

    locationIcon: "/assets/svg/loc.svg",
    location: "Victory Arena, 321 Warrior Way, Clash Town, 23456",
    date: "June 20, 2025",
  },
  {
    image: "/assets/png/trick4.png",
    title: "Rumble in the Ring",
    description:
      "Get ready for Rumble in the Ring, an event that promises to deliver jaw-dropping punches and breathtaking maneuvers. This is your chance to see the future stars of the fighting world make their mark!",
    locationIcon: "/assets/svg/loc.svg",
    location: "Titan Dome, 654 Power Blvd, Strike City, 34567",
    date: "June 27, 2025",
  },
  {
    image: "/assets/png/trick5.png",
    title: "The Grand Slam Showdown",
    description:
      "Prepare for The Grand Slam Showdown, a spectacular event where the finest fighters will face off in a series of thrilling matches. With unexpected twists and fan favorites, this showdown promises to keep you on the edge of your seat!",
    locationIcon: "/assets/svg/loc.svg",
    location: "Champion's Arena, 987 Glory Rd, Victoryville, 45678",
    date: "July 15, 2025",
  },
  {
    image: "/assets/png/trick6.png",
    title: "Battle of the Titans",
    description:
      "Don’t miss the Battle of the Titans, an epic event where the strongest contenders clash for supremacy. Witness unmatched skill and heart-stopping action as fighters push their limits in pursuit of greatness!",
    locationIcon: "/assets/svg/loc.svg",
    location: "Warrior's Arena, 111 Titan St, Conquer City, 56789",
    date: "August 5, 2025",
  },
  {
    image: "/assets/png/trick7.png",
    title: "Legends Unleashed",
    description:
      "Join us for Legends Unleashed, a thrilling event that brings together iconic champions from across the ages. Experience the intensity of legendary matchups and witness history in the making as they vie for glory!",
    locationIcon: "/assets/svg/loc.svg",
    location: "Hero's Field, 222 Legacy Ave, Epic Town, 67890",
    date: "September 20, 2025",
  },
  {
    image: "/assets/png/trick8.png",
    title: "Rise of the Warriors",
    description:
      "Step into the arena for the Rise of the Warriors, a breathtaking event showcasing emerging talent and seasoned fighters alike. Feel the adrenaline as competitors battle fiercely for recognition and the ultimate title!",
    locationIcon: "/assets/svg/loc.svg",
    location: "Victory Dome, 333 Conquest Blvd, Champion City, 78901",
    date: "October 10, 2025",
  },

];

const CARDS_PER_PAGE = 8;


export default function Card() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(events.length / CARDS_PER_PAGE);

  const paginatedEvents = events.slice(
    (currentPage - 1) * CARDS_PER_PAGE,
    currentPage * CARDS_PER_PAGE
  );

  const handlePageClick = (page) => setCurrentPage(page);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  return (
    <>
      <div className="w-[90%] 2xl:max-w-2xl mx-auto pt-10">
        <div className="bg-[#0A0A0A] w-[110px] h-[40px] rounded-full mx-auto md:mx-0">
          <p className="font-semibold text-[12px] text-[#FF0000] pt-3 text-center">
            Events
          </p>
        </div>

        <h2 className="font-bold text-[24px] xl:text-[32px] text-white mt-5 text-center md:text-start">
          The Countdown to Combat Begins -{" "}
          <span className="text-[#FF0000]">Don’t Miss Out!</span>
        </h2>
        <h4 className="font-normal text-sm xl:text-base text-white opacity-50 mt-1 text-center md:text-start">
          We offer tailored training plans, an interactive map of nearby gyms,
          training facilities, and recreational spots to enhance your journey.
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-10">
          {paginatedEvents.map((event, index) => (
            <div key={index} className="bg-[#0F0F0F] rounded-[30px] p-4">
              <Image
                src={event.image}
                alt=""
                width={430}
                height={180}
                className="h-[180px] object-cover rounded-t-[30px]"
              />
              <div className="mt-4">
                <p className="font-bold text-base">{event.title}</p>
                <p className="font-normal text-white opacity-50 text-[12px] line-clamp-1 mt-1">
                  {event.description}
                </p>
                <div className="flex gap-2 mt-3">
                  <Image
                    src={event.locationIcon}
                    alt="location"
                    width={12}
                    height={16}
                  />
                  <p className="font-bold text-[12px] text-white line-clamp-1">
                    {event.location}
                  </p>
                </div>
                <p className="font-normal text-[12px] text-white opacity-50 mt-2">
                  {event.date}
                </p>
                <div className="flex gap-1 justify-end cursor-pointer mt-5">
                  <p className="font-bold text-[12px] text-[#FF0000]">
                    View Event
                  </p>
                  <FaArrowRight className="text-[15px] text-[#FF0000] self-center" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center gap-2 mt-10">
          <div
            onClick={handlePrev}
            className="bg-[#2D2D2D] rounded-[8px] h-[32px] w-[32px] p-2 cursor-pointer"
          >
            <IoIosArrowBack className="text-[16px] text-white" />
          </div>
          {[...Array(totalPages)].map((_, i) => {
            const page = i + 1;
            const isActive = page === currentPage;
            return (
              <div
                key={page}
                onClick={() => handlePageClick(page)}
                className={`${
                  isActive ? "bg-[#FF0000]" : "hover:bg-[#FF0000]"
                } rounded-[8px] h-[32px] w-[32px] p-2 group cursor-pointer`}
              >
                <p
                  className={`font-semibold text-[12px] text-center ${
                    isActive
                      ? "text-white"
                      : "text-[#848484] group-hover:text-white"
                  }`}
                >
                  {page}
                </p>
              </div>
            );
          })}
          <div
            onClick={handleNext}
            className="bg-[#2D2D2D] rounded-[8px] h-[32px] w-[32px] p-2 cursor-pointer"
          >
            <IoIosArrowForward className="text-[16px] text-white" />
          </div>
        </div>
      </div>
    </>
  );
}
