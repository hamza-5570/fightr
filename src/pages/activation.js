"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LuLoader } from "react-icons/lu";
import { FaTiktok } from "react-icons/fa";

export default function Activation() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <div className="py-10 relative">
      <Link href={"/"}>
        <Image
          src="/assets/png/logo.png"
          alt="Fightr Logo"
          width={196}
          height={32}
          className="w-[140px] md:w-auto mx-auto"
        />
      </Link>

      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-[#141414] border border-[#1d1d1d] w-[90%] md:w-[70%] lg:w-[55%] xl:w-[35%] p-5 md:p-10 rounded-[20px]">
          {loading ? (
            <Image
              src="/assets/svg/check.svg"
              alt="Confirmed"
              width={52}
              height={52}
              className="mx-auto"
            />
          ) : (
            <LuLoader className="text-3xl text-center mx-auto text-[#FF0000]" />
          )}
          <h2 className="font-bold text-[24px] md:text-[32px] text-white text-center mt-5">
            {"You're in"}
          </h2>
          <p className="text-center text-white opacity-50 ">
            {loading ? "Welcome to Fightr!" : ""}
          </p>
          <p className="text-center text-white opacity-50 mt-6">
            {loading
              ? "We are going to keep you updated by E-mail so keep your eyes peeled!"
              : "Activating your account..."}
          </p>
          <Link href="/about">
            <button className="cursor-pointer mt-8 font-bold text-sm text-white bg-[#FF0000] rounded-full w-full md:w-[244px] h-[52px] block mx-auto">
              Continue
            </button>
          </Link>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-5 absolute bottom-5 left-0 md:left-auto right-5">
        <Link
          href="https://www.facebook.com/share/1G1wHBj1Dh/?mibextid=wwXIfr"
          target="_blank"
        >
          <Image
            src="/assets/svg/fb.svg"
            alt="Facebook"
            width={52}
            height={52}
            className="cursor-pointer"
          />
        </Link>
        <Link href="https://instagram.com/fightr.app" target="_blank">
          <Image
            src="/assets/svg/insta.svg"
            alt="Instagram"
            width={52}
            height={52}
            className="cursor-pointer"
          />
        </Link>

        <Link href="https://x.com/fightrapp" target="_blank">
              <Image
                src={"/assets/svg/icon3.svg"}
                alt=""
                width={52}
                height={52}
                className="cursor-pointer"
              />
            </Link>
            <Link href="https://www.tiktok.com/@fightrapp" target="_blank">
              <div className="relative">
                <div className="self-center bg-white/5 opacity-70 backdrop-blur-xs rounded-[12px]  w-[52px] h-[52px]"></div>

                <FaTiktok className="text-white text-[20px] absolute z-20 top-4 left-0 right-0 mx-auto" />
              </div>
            </Link>
      </div>
    </div>
  );
}
