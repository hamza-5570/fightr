import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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

export default function About() {
  return (
    <>
      <div className="bg-[#0A0A0A] py-5">
        <Navbar />
      </div>

      <div className="bg-black w-[90%] mx-auto pt-10">
        <div className="bg-[#0A0A0A] rounded-full p-2 flex gap-2 w-[160px]">
          <div className="flex gap-2">
            <Image
              src={"/assets/svg/home.svg"}
              alt=""
              width={14}
              height={14}
              className="-mt-[1px]"
            />
            <Link href={'/'} className="font-medium text-[12px] text-[#77797B] self-center">
              Home /
            </Link>
          </div>
          <p className="font-medium text-[12px] text-white">About Us</p>
        </div>

        <h2 className="font-bold text-[24px] md:text-[32px] text-white mt-5">
          About Us
        </h2>
        <h4 className="font-normal text-sm md:text-base text-white opacity-50 mt-1">
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

        <div className="grid md:grid-cols-2 xl:grid-cols-3 mt-10">
          {features.map((feature, index) => (
            <div key={index} className="border-[1px] border-[#191919] hover:bg-[#0A0A0A] cursor-pointer group p-8">
              <div className="border-[4px] border-[#141414] group-hover:border-[#690000] group-hover:bg-[#FF0000] cursor-pointer rounded-2xl w-[52px] h-[52px]">
                <Image
                  src={feature.icon}
                  alt=""
                  width={24}
                  height={24}
                  className="mx-auto mt-2"
                />
              </div>
              <h2 className="font-bold text-[20px] lg:text-[24px] text-white mt-3">
                {feature.title}
              </h2>
              <h4 className="font-normal text-sm lg:text-base text-white opacity-50 mt-1">
                {feature.description}
              </h4>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-5 mt-16 lg:mt-28 my-10">
          <div className="self-center">
            <div className="bg-[#0A0A0A] w-[119px] h-[40px] rounded-full">
              <p className="font-semibold text-[12px] text-[#FF0000] pt-3 text-center">
                Why Choose US
              </p>
            </div>

            <h2 className="font-bold text-[24px] xl:text-[32px] text-white mt-5">
              Why Fighters Choose us
            </h2>
            <h4 className="font-normal text-sm xl:text-base text-white opacity-50 mt-1">
              We offer tailored training plans, an interactive map of nearby
              gyms, training facilities, and recreational spots to enhance your
              journey.
            </h4>
            <h4 className="font-normal text-sm xl:text-base text-white opacity-50 mt-3">
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
              className="w-full"
            />
          </div>
        </div>

        <div className="banner rounded-[12px] lg:rounded-[30px] p-4 py-6 md:p-8 mt-10 lg:mt-20">
            <p className="font-normal text-[18px] xl:text-[26px] text-white">
              Ready to Take Your Fighting Skills to the Next Level?
            </p>
            <h2 className="font-bold text-[24px] xl:text-[32px] text-white mt-2 xl:w-[60%]">
              Track Real-World Achievements, Climb Dynamic Ranks, and Challenge
              Fighters Worldwide.
            </h2>
            <h2 className="font-bold text-[24px] xl:text-[32px] text-[#FF0000]">
              Only on Fightr.
            </h2>
            <h4 className="font-normal text-sm xl:text-base text-white opacity-50 mt-1 xl:w-[60%]">
              Whether youre looking to sharpen your skills, connect with
              like-minded fighters, or rise to the top, Fightr is the platform
              to fuel your growth and take your journey to the next level.
              Welcome to the Fightr family!
            </h4>

           <div className="space-y-5 lg:space-y-0 lg:flex gap-5 mt-8">
            <div className="flex gap-2">
                <Image src={'/assets/svg/tick.svg'} alt="" width={20} height={20} />
                <p className="font-bold text-sm text-white">Track Real-World Achievements</p>
            </div>
            <div className="flex gap-2">
                <Image src={'/assets/svg/tick.svg'} alt="" width={20} height={20} />
                <p className="font-bold text-sm text-white">Challenge Fighters Worldwide</p>
            </div>
            <div className="flex gap-2">
                <Image src={'/assets/svg/tick.svg'} alt="" width={20} height={20} />
                <p className="font-bold text-sm text-white">Fuel Continuous Growth</p>
            </div>
           </div>
           <button className="mt-8 font-bold text-sm text-white cursor-pointer bg-[#FF0000]  rounded-full w-full md:w-[236px] h-[44px] xl:h-[52px] ">
           Join Now!
            </button>

          </div>
      </div>
      <Footer/>
    </>
  );
}
