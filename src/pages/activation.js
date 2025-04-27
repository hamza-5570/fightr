"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { createClient } from "@/supabase/supabase-component";

export default function Activation() {
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error || !data.user) {
        console.error("User error:", error);
        setLoading(false);
        setSuccess(false);
        setMessage("Activation failed. Please try again.");
        return;
      }
  
      const user = data.user;
      if (user.email_confirmed_at) {
        console.log("success mai aya");
        setLoading(false);
        setSuccess(true);
        setMessage("Your account has been successfully activated!");
      } else {
        console.log("abhi confirm nahi hua, loading pe rehna hai");
        // Stay in loading
      }
    };
  
    setTimeout(checkSession, 5000);
  }, [router.query]);

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
          {loading && (
            <>
              <h2 className="font-bold text-[24px] md:text-[32px] text-white text-center mt-5">
                Verifying your email…
              </h2>
              <p className="text-center text-white opacity-50 mt-3">
                Please hold on while we confirm your account.
              </p>
            </>
          )}

          {!loading && success && (
            <>
              <Image
                src="/assets/svg/check.svg"
                alt="Confirmed"
                width={52}
                height={52}
                className="mx-auto"
              />
              <h2 className="font-bold text-[24px] md:text-[32px] text-white text-center mt-5">
                Email confirmed!
              </h2>
              <p className="text-center text-white opacity-50 mt-3">
                {message}
              </p>
              <Link href="/about">
                <button className="cursor-pointer mt-8 font-bold text-sm text-white bg-[#FF0000] rounded-full w-full md:w-[244px] h-[52px] block mx-auto">
                  Continue
                </button>
              </Link>
            </>
          )}

          {/* {!loading && !success && (
            <>
              <h2 className="font-bold text-[24px] md:text-[32px] text-red-500 text-center mt-5">
                Activation Failed
              </h2>
              <p className="text-center text-white opacity-50 mt-3">
                {message}
              </p>
            </>
          )} */}
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
