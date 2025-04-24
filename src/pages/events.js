import Slide from "@/components/event/slide";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Card from "@/components/event/card";

export default function Events() {
  return (
    <>
      <div className="bg-[#0A0A0A] py-5">
        <Navbar />
      </div>

      <div className="bg-black w-[90%] 2xl:max-w-2xl mx-auto pt-10">
        <div className="bg-[#0A0A0A] rounded-full p-2 flex mx-auto md:mx-0  gap-2 w-[160px]">
          <div className="flex gap-2">
            <Image
              src={"/assets/svg/home.svg"}
              alt=""
              width={14}
              height={14}
              className="-mt-[1px]"
            />
            <Link
              href={"/"}
              className="font-medium text-[12px] text-[#77797B] hover:text-white self-center"
            >
              Home
            </Link>
            <p className="font-medium text-[16px] text-[#77797B] hover:text-white self-center">
              /
            </p>
          </div>
          <p className="font-medium text-[12px] text-white self-center">
            Events
          </p>
        </div>

        <h2 className="font-bold text-[24px] md:text-[32px] text-white mt-5 text-center md:text-start">
          Events
        </h2>
        <h4 className="font-normal text-sm md:text-base text-white opacity-50 mt-1 text-center md:text-start">
          Welcome to the Events page of Fightr! Here, you can find all the
          upcoming events in the combat sports world—whether it’s boxing, MMA,
          or any other exciting fight night. Stay updated with key details about
          each event and never miss a chance to witness incredible matches,
          discover new talent, or support your favorite fighter.
        </h4>
      </div>


<Slide/>
<Card/>

      <Footer />
    </>
  );
}
