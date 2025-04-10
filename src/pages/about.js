import Slide from "@/components/about/slide";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";


export default function About() {
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
          <p className="font-medium text-[12px] text-white self-center">About Us</p>
        </div>

        <h2 className="font-bold text-[24px] md:text-[32px] text-white mt-5 text-center md:text-start">
          About Us
        </h2>
        <h4 className="font-normal text-sm md:text-base text-white opacity-50 mt-1 text-center md:text-start">
          Fightr is a dynamic social networking platform designed specifically
          for fighters, combat sports enthusiasts, and trainers. It provides a
          dedicated space for users to connect, showcase their skills,
          participate in competitions, and engage with a passionate community.
          The platform integrates digital media, event listings, and performance
          analytics to enhance the visibility and growth of fighters globally.
          Operating as an online web portal and mobile application, Fightr
          bridges the gap between talent and opportunity in the combat
          sports industry.
        </h4>
</div>
         <Slide/> 

        <div className="grid lg:grid-cols-2 gap-5 mt-16 lg:mt-28 my-10 w-[90%] 2xl:max-w-2xl mx-auto">
          <div className="self-center">
            <div className="bg-[#0A0A0A] w-[119px] h-[40px] rounded-full mx-auto md:mx-0">
              <p className="font-semibold text-[12px] text-[#FF0000] pt-3 text-center">
                Why Choose US
              </p>
            </div>

            <h2 className="font-bold text-[24px] xl:text-[32px] text-white mt-5 text-center md:text-start">
              Why Fighters Choose us
            </h2>
            <h4 className="font-normal text-sm xl:text-base text-white opacity-50 mt-1 text-center md:text-start">
              We offer tailored training plans, an interactive map of nearby
              gyms, training facilities, and recreational spots to enhance your
              journey.
            </h4>
            <h4 className="font-normal text-sm xl:text-base text-white opacity-50 mt-3 text-center md:text-start  ">
              Fightr also brings the community closer together by enabling
              fighters to discover and challenge peers in other cities. These
              challenges not only create thrilling opportunities but also impact
              rankings and boost visibility within the fighting world.
            </h4>

            <button className="mt-8 font-bold text-sm text-white cursor-pointer bg-[#FF0000]  rounded-full w-full md:w-[236px] h-[44px] xl:h-[52px] ">
              Get Started
            </button>
          </div>
          <div className="self-center mt-5 lg:mt-0">
            <Image
              src={"/assets/png/fig.png"}
              alt=""
              width={650}
              height={380}
              className="w-full hidden md:block"
            />

            <Image
              src={"/assets/png/mob-fig.png"}
              alt=""
              width={316}
              height={400}
              className="w-full block md:hidden"
            />
          </div>
        </div>

        <div className="banner rounded-[12px] lg:rounded-[30px] p-4  md:p-8 mt-10  lg:mt-20 w-[90%] 2xl:max-w-2xl mx-auto">
          <p className="font-normal text-[14px] md:text-[18px] xl:text-[26px] text-white text-center md:text-start">
            Ready to Take Your Fighting Skills to the Next Level?
          </p>
          <h2 className="font-bold text-[20px] md:text-[24px] xl:text-[32px] text-white mt-2 xl:w-[60%] text-center md:text-start">
            Track Real-World Achievements, Climb Dynamic Ranks, and Challenge
            Fighters Worldwide.
          </h2>
          <h2 className="font-bold text-[20px] md:text-[24px] xl:text-[32px] text-[#FF0000] text-center md:text-start">
            Only on Fightr.
          </h2>
          <h4 className="font-normal text-sm xl:text-base text-white opacity-50 mt-1 xl:w-[60%] text-center md:text-start">
            Whether youre looking to sharpen your skills, connect with
            like-minded fighters, or rise to the top, Fightr is the platform to
            fuel your growth and take your journey to the next level. Welcome to
            the Fightr family!
          </h4>

          <div className="space-y-5 lg:space-y-0 lg:flex gap-5 mt-8">
            <div className="flex gap-2">
              <Image
                src={"/assets/svg/tick.svg"}
                alt=""
                width={20}
                height={20}
              />
              <p className="font-bold text-sm text-white">
                Track Real-World Achievements
              </p>
            </div>
            <div className="flex gap-2">
              <Image
                src={"/assets/svg/tick.svg"}
                alt=""
                width={20}
                height={20}
              />
              <p className="font-bold text-sm text-white">
                Challenge Fighters Worldwide
              </p>
            </div>
            <div className="flex gap-2">
              <Image
                src={"/assets/svg/tick.svg"}
                alt=""
                width={20}
                height={20}
              />
              <p className="font-bold text-sm text-white">
                Fuel Continuous Growth
              </p>
            </div>
          </div>
          <button className="mt-8 font-bold text-sm text-white cursor-pointer bg-[#FF0000]  rounded-full w-[236px] h-[44px] xl:h-[52px] ">
            Join Now!
          </button>
        </div>
      <Footer />
    </>
  );
}
