import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const roles = [
  {
    id: 1,
    title: "Fighter",
    description:
      "Showcase your skills, find events, and connect with the fighting community.",
    icon: "/assets/svg/ty.svg",
  },
  {
    id: 2,
    title: "Supporter",
    description:
      "Follow your favorite fighters, stay updated on events, and cheer from the sidelines.",
    icon: "/assets/svg/ty2.svg",
  },
  {
    id: 3,
    title: "Trainer",
    description: "Share your expertise and grow your fighter network.",
    icon: "/assets/svg/ty3.svg",
  },
  {
    id: 4,
    title: "Promoter",
    description: "Organize, promote, and manage events effortlessly.",
    icon: "/assets/svg/ty4.svg",
  },
];

export default function Step() {
  const [selectedId, setSelectedId] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);

  const handleContinue = () => {
    if (currentStep === 1 && selectedId) {
      setCurrentStep(2);
    }
  };

  return (
    <>
      <div className="grid lg:grid-cols-12">
        <div className="lg:col-span-4 bg-[#0F0F0F] p-10 lg:h-screen relative">
          <Image src={"/assets/png/logo.png"} alt="" width={196} height={32} />
          <p className="font-bold text-3xl text-white mt-14">
            Let’s Get Started
          </p>
          <p className="font-bold text-3xl text-white">
            Complete Your <span className="text-[#FF0000]">Account!</span>
          </p>
          <p className="font-normal text-base text-white opacity-50 mt-3">
            Welcome to Fightr, the ultimate platform connecting fighters,
            trainers, promoters, and supporters worldwide. Create your account
            in just three easy steps and become part of a thriving community.
          </p>

          <img
            src={"/assets/png/help.png"}
            alt=""
            width={117}
            height={52}
            className="cursor-pointer mt-10 lg:absolute bottom-5"
          />
        </div>

        <div className="lg:col-span-8 py-10 lg:h-screen lg:overflow-y-scroll">
          <div className="flex justify-center gap-5">
            <div className="bg-[#191919] rounded-full p-3 w-[150px] md:w-[172px] flex gap-3">
              <div
                className={`h-[44px] w-[44px] rounded-full py-[14px] flex items-center justify-center ${
                  currentStep >= 1 ? "bg-[#FF0000]" : "bg-[#383838]"
                }`}
              >
                <p
                  className={`font-bold text-[12px] text-white text-center ${
                    currentStep >= 1 ? "" : "opacity-50"
                  }`}
                >
                  01
                </p>
              </div>
              <p
                className={`font-medium text-base self-center ${
                  currentStep >= 1 ? "" : "opacity-50"
                }`}
              >
                Step 01
              </p>
            </div>
            <div className="bg-[#191919] rounded-full p-3 w-[150px] md:w-[172px] flex gap-3">
              <div
                className={`h-[44px] w-[44px] rounded-full py-[14px] flex items-center justify-center ${
                  currentStep >= 2 ? "bg-[#FF0000]" : "bg-[#383838]"
                }`}
              >
                <p
                  className={`font-bold text-[12px] text-white text-center ${
                    currentStep >= 2 ? "" : "opacity-50"
                  }`}
                >
                  02
                </p>
              </div>
              <p
                className={`font-medium text-base self-center ${
                  currentStep >= 2 ? "" : "opacity-50"
                }`}
              >
                Step 02
              </p>
            </div>
          </div>

          <div className="mt-16 w-[90%] mx-auto">
            {currentStep === 1 ? (
              <>
                <p className="font-bold text-2xl text-white text-center">
                  Choose Your Role
                </p>
                <p className="font-normal text-sm text-white opacity-50 text-center mt-1">
                  Select the type of account that best matches you:
                </p>
                <div className="grid md:grid-cols-2 gap-5 mt-10">
                  {roles.map((role) => (
                    <div
                      key={role.id}
                      onClick={() => setSelectedId(role.id)}
                      className={`cursor-pointer bg-[#0F0F0F] rounded-[20px] p-6 border-[1px] ${
                        selectedId === role.id
                          ? "border-[#FF0000]"
                          : "border-transparent"
                      }`}
                    >
                      <div className="flex justify-between">
                        <Image
                          src={role.icon}
                          alt={role.title}
                          width={52}
                          height={52}
                        />
                        {selectedId === role.id && (
                          <p className="font-normal text-sm text-white opacity-50 self-center">
                            Selected
                          </p>
                        )}
                      </div>
                      <p className="font-bold text-xl text-white mt-5">
                        {role.title}
                      </p>
                      <p className="font-normal text-sm text-white opacity-50 mt-1">
                        {role.description}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div>
                <p className="font-bold text-2xl text-white text-center">
                  Add Your Club <span className="opacity-50">(Optional)</span>
                </p>
                <p className="font-normal text-sm text-white opacity-50 text-center mt-1">
                  Represent a club or gym? Add your club’s details to promote
                  your organization and connect your team.
                </p>

                <div className="grid md:grid-cols-2 gap-5 mt-10">
                  <div className="bg-[#191919] rounded-[12px] p-3">
                    <p className="font-medium text-[12px] text-[#605858]">
                      Club Name
                    </p>
                    <input
                      type="text"
                      placeholder=""
                      className="font-bold text-sm text-white outline-none bg-[#191919] w-full"
                    />
                  </div>

                  <div className="bg-[#191919] rounded-[12px] p-3">
                    <p className="font-medium text-[12px] text-[#605858]">
                      Club Address
                    </p>
                    <input
                      type="text"
                      placeholder=""
                      className="font-bold text-sm text-white outline-none bg-[#191919] w-full"
                    />
                  </div>

                  <div className="bg-[#191919] rounded-[12px] p-3">
                    <p className="font-medium text-[12px] text-[#605858]">
                      Postal Code
                    </p>
                    <input
                      type="number"
                      placeholder=""
                      className="font-bold text-sm text-white outline-none bg-[#191919] w-full"
                    />
                  </div>

                  <div className="bg-[#191919] rounded-[12px] p-3">
                    <p className="font-medium text-[12px] text-[#605858]">
                      City
                    </p>
                    <input
                      type="text"
                      placeholder=""
                      className="font-bold text-sm text-white outline-none bg-[#191919] w-full"
                    />
                  </div>
                </div>

                <Link href={"/activation"}>
                  <button
                    type="button"
                    onClick={handleContinue}
                    className="mt-8 font-bold text-sm text-white cursor-pointer bg-[#FF0000] rounded-full w-full md:w-[236px] h-[52px] block mx-auto"
                  >
                    Continue
                  </button>
                </Link>
              </div>
            )}

            {currentStep === 1 && (
              <button
                type="button"
                onClick={handleContinue}
                className="mt-8 font-bold text-sm text-white cursor-pointer bg-[#FF0000] rounded-full w-full md:w-[236px] h-[52px] block mx-auto"
              >
                Continue
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
