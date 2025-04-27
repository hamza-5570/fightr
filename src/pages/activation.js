"use client";


import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { createClient } from "@/supabase/supabase-component";
import { toast } from "sonner";

export default function Activation() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("loading");
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    let interval;

    const checkConfirmation = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error || !data.user) {
        console.error("User error:", error);
        setStatus("error");
        setMessage("Activation failed. Please try again.");
        clearInterval(interval); // stop polling if major error
        return;
      }

      const user = data.user;
      if (user.email_confirmed_at) {
        console.log("Email confirmed!");

        clearInterval(interval); // stop polling when confirmed

        // 1 second delay after confirmation
        setTimeout(() => {
          setStatus("success");
          setMessage("Your account has been successfully activated!");
        }, 1000);
      } else {
        console.log("Still waiting for email confirmation...");
        // No change, stay in loading state
      }
    };

    // start checking every 5 seconds
    interval = setInterval(checkConfirmation, 10000);

    // also call once immediately after 5 seconds
    setTimeout(checkConfirmation, 1000);

    // clean up interval when unmounting
    return () => clearInterval(interval);
  }, [router.query]);

  const resendLink = async () => {
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
