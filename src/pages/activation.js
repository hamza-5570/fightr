"use client";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Activation() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      router.push("/");
    }, 3000);
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
          <p className="text-white text-center">
            {loading
              ? "Your account has been activated!"
              : "Activating your account..."}
          </p>
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
