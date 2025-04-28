import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
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

export default function Steps({ formik, loading }) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);

  const handleRoleSelect = (roleTitle) => {
    formik.setFieldValue("user_role", roleTitle);
  };

  const handleContinue = () => {
    if (currentStep === 1 && formik.values.user_role) {
      setCurrentStep(2);
    }
  };

  const handleBack = () => {
    router.replace({ query: { step: "false" } });
  };

  return (
    <div className="grid lg:grid-cols-12">
      <div className="lg:col-span-4 bg-[#0F0F0F] p-10 lg:h-screen relative">
      <Link href={'/'} >
      
        <Image src={"/assets/png/logo.png"} alt="" width={196} height={32} />
        </Link>

        <p className="font-bold text-3xl text-white mt-14">Let’s Get Started</p>
        <p className="font-bold text-3xl text-white">
          Complete Your <span className="text-[#FF0000]">Account!</span>
        </p>
        <p className="font-normal text-base text-white opacity-50 mt-3">
          Welcome to Fightr, the ultimate platform connecting fighters,
          trainers, promoters, and supporters worldwide. Create your account in
          just three easy steps and become part of a thriving community.
        </p>

        <img
          src={"/assets/png/help.png"}
          alt="help"
          width={117}
          height={52}
          className="cursor-pointer mt-10 lg:absolute bottom-5"
        />
      </div>

      <div className="lg:col-span-8 py-10 lg:h-screen lg:overflow-y-scroll">
        <div className="relative flex justify-center gap-5">
          <div
            onClick={handleBack}
            className="absolute top-5 left-12 text-white w-[44px] h-[44px] flex items-center justify-center bg-[#FF0000] rounded-full text-xs cursor-pointer"
          >
            Back
          </div>
          {[1, 2].map((step) => (
            <div
              key={step}
              className="bg-[#191919] rounded-full p-3 w-[150px] md:w-[172px] flex gap-3"
            >
              <div
                className={`h-[44px] w-[44px] rounded-full py-[14px] flex items-center justify-center ${
                  currentStep >= step ? "bg-[#FF0000]" : "bg-[#383838]"
                }`}
              >
                <p
                  className={`font-bold text-[12px] text-white text-center ${
                    currentStep >= step ? "" : "opacity-50"
                  }`}
                >
                  0{step}
                </p>
              </div>
              <p
                className={`font-medium text-base self-center text-white ${
                  currentStep >= step ? "" : "opacity-50"
                }`}
              >
                Step 0{step}
              </p>
            </div>
          ))}
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
                    onClick={() => handleRoleSelect(role.title)}
                    className={`cursor-pointer bg-[#0F0F0F] rounded-[20px] p-6 border-[1px] ${
                      formik.values.user_role === role.title
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
                      {formik.values.user_role === role.title && (
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

              <button
                type="button"
                onClick={handleContinue}
                disabled={!formik.values.user_role}
                className={`mt-8 font-bold text-sm text-white cursor-pointer rounded-full w-full md:w-[236px] h-[52px] block mx-auto ${
                  formik.values.user_role
                    ? "bg-[#FF0000]"
                    : "bg-[#383838] cursor-not-allowed"
                }`}
              >
                Continue
              </button>
            </>
          ) : (
            // Step 2: Club Details
            <div>
              <p className="font-bold text-2xl text-white text-center">
                Add Your Club <span className="opacity-50">(Optional)</span>
              </p>
              <p className="font-normal text-sm text-white opacity-50 text-center mt-1">
                Represent a club or gym? Add your club’s details to promote your
                organization and connect your team.
              </p>

              <div className="grid md:grid-cols-2 gap-5 mt-10">
                {/* Example Club Fields */}
                <div className="bg-[#191919] rounded-[12px] p-3">
                  <p className="font-medium text-[12px] text-[#605858]">
                    Club Name
                  </p>
                  <input
                    type="text"
                    name="club_name"
                    value={formik.values.club_name}
                    onChange={formik.handleChange}
                    className="font-bold text-sm text-white outline-none bg-[#191919] w-full"
                  />
                </div>

                <div className="bg-[#191919] rounded-[12px] p-3">
                  <p className="font-medium text-[12px] text-[#605858]">
                    Club Address
                  </p>
                  <input
                    type="text"
                    name="club_address"
                    value={formik.values.club_address}
                    onChange={formik.handleChange}
                    className="font-bold text-sm text-white outline-none bg-[#191919] w-full"
                  />
                </div>

                <div className="bg-[#191919] rounded-[12px] p-3">
                  <p className="font-medium text-[12px] text-[#605858]">
                    Postal Code
                  </p>
                  <input
                    type="number"
                    name="postal_code"
                    value={formik.values.postal_code}
                    onChange={formik.handleChange}
                    className="font-bold text-sm text-white outline-none bg-[#191919] w-full"
                  />
                </div>

                <div className="bg-[#191919] rounded-[12px] p-3">
                  <p className="font-medium text-[12px] text-[#605858]">City</p>
                  <input
                    type="text"
                    name="city"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    className="font-bold text-sm text-white outline-none bg-[#191919] w-full"
                  />
                </div>
              </div>

              <button
                type="submit"
                onClick={formik.handleSubmit}
                className="mt-8 font-bold text-sm text-white cursor-pointer bg-[#FF0000] rounded-full w-full md:w-[236px] h-[52px] block mx-auto"
              >
                {loading ? "Registering..." : "Register"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
