"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LuLoader } from "react-icons/lu";

export default function Activation() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <div className="py-10 relative">
      <Image
        src="/assets/png/logo.png"
        alt="Fightr Logo"
        width={196}
        height={32}
        className="w-[140px] md:w-auto mx-auto"
      />

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
            Email confirmed!
          </h2>
          <p className="text-center text-white opacity-50 mt-3">
            {loading
              ? "Your account has been activated!"
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
        <Image
          src="/assets/svg/fb.svg"
          alt="Facebook"
          width={52}
          height={52}
          className="cursor-pointer"
        />
        <Image
          src="/assets/svg/insta.svg"
          alt="Instagram"
          width={52}
          height={52}
          className="cursor-pointer"
        />
        <Image
          src="/assets/svg/x.svg"
          alt="Twitter"
          width={52}
          height={52}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}
