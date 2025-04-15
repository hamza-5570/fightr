import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Activation() {
  return (
    <>
      <div className="py-10 relative">
        <Image
          src="/assets/png/logo.png"
          alt=""
          width={196}
          height={32}
          className="w-[140px] md:w-auto mx-auto "
        />

        <div className="min-h-screen flex items-center justify-center">
          <div className="bg-[#141414] border-[1px] border-[#1d1d1d] w-[90%] md:w-[70%] lg:w-[55%] xl:w-[35%] 2xl:max-w-3xl p-5 md:p-10 rounded-[20px]">
            <Image
              src={"/assets/svg/check.svg"}
              alt=""
              width={52}
              height={52}
              className="mx-auto"
            />
            <h2 className="font-bold text-[24px] md:text-[32px] text-white text-center mt-5">
              You are in
            </h2>
            <h4 className="font-normal text-base text-white opacity-50 text-center">
              Welcome to Fightr!
            </h4>
            <h4 className="font-normal text-base text-white opacity-50 text-center mt-10">
              We are going to keep you updated by E-mail so keep
              your eyes peeled!
            </h4>
            <Link href={"/about"}>
              <button className="mt-8 font-bold text-sm text-white cursor-pointer bg-[#FF0000] rounded-full w-full md:w-[244px] h-[52px] block mx-auto">
                Continue
              </button>
            </Link>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-5 absolute bottom-5  left-0 md:left-auto right-5">
          <Image
            src={"/assets/svg/fb.svg"}
            alt=""
            width={52}
            height={52}
            className="cursor-pointer"
          />
          <Image
            src={"/assets/svg/insta.svg"}
            alt=""
            width={52}
            height={52}
            className="cursor-pointer"
          />
          <Image
            src={"/assets/svg/x.svg"}
            alt=""
            width={52}
            height={52}
            className="cursor-pointer"
          />
        </div>
      </div>
    </>
  );
}
