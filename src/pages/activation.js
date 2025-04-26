"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { createClient } from "@/supabase/supabase-component";
import { toast } from "sonner";

export default function Activation() {
  const [message, setMessage] = useState("");
  const router = useRouter();
  const supabase = createClient();
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.log("uper wale mai aya");
        console.error("Session error:", error);
        setStatus("error");
        setMessage("Activation failed. Please try again.");
        return;
      }

      const user = data.session?.user;
      if (user?.email_confirmed_at) {
        console.log("succes mai aya");
        setStatus("success");
        setMessage("Your account has been successfully activated!");
      } else {
        console.log("error mai aya");
        // Could be expired link or already activated
        setStatus("error");
        setMessage(
          "The activation link is invalid or has expired. " +
            "Click below to resend:"
        );
      }
    };

    // small delay to let Supabase finish processing the link
    setTimeout(checkSession, 1000);
  }, [router.query]);

  const resendLink = async () => {
    // assume you stored the user's email in localStorage on signup
    const email = window.localStorage.getItem("pending_email");
    if (!email) {
      toast.error("No email found. Please sign up again.");
      return;
    }

    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) toast.error(error.message);
    else toast.success("Confirmation email resent—check your inbox!");
  };

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
          {status === "loading" && (
            <>
              <Image
                src="/assets/svg/check.svg"
                alt="Verifying"
                width={52}
                height={52}
                className="mx-auto"
              />
              <h2 className="font-bold text-[24px] md:text-[32px] text-white text-center mt-5">
                Verifying your email…
              </h2>
              <p className="text-center text-white opacity-50 mt-3">
                Please hold on while we confirm your account.
              </p>
            </>
          )}

          {status === "success" && (
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

          {status === "error" && (
            <>
              <Image
                src="/assets/svg/error.svg"
                alt="Error"
                width={52}
                height={52}
                className="mx-auto"
              />
              <h2 className="font-bold text-[24px] md:text-[32px] text-white text-center mt-5">
                Oops—link invalid or expired
              </h2>
              <p className="text-center text-white opacity-50 mt-3">
                {message}
              </p>
              <button
                onClick={resendLink}
                className="mt-6 font-bold text-sm text-white bg-[#FF0000] rounded-full w-full md:w-[244px] h-[52px] block mx-auto"
              >
                Resend Confirmation Email
              </button>
            </>
          )}
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
