import Navbar from "@/components/common/navbar";
import { supabase } from "@/supabase/supabase-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const logOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error(error.message);
      return;
    }
    localStorage.clear();
    sessionStorage.clear();
    router.push("/login");
  };

  return (
    <>
      <div className="bg pb-16 md:pb-28 pt-10">
        <Navbar />

        <div>
          <Image
            src={"/assets/png/letter.png"}
            alt=""
            width={1400}
            height={311}
            className="hidden md:block mx-auto mt-24 md:mt-48 xl:mt-80"
          />

          <Image
            src={"/assets/png/mob.png"}
            alt=""
            width={1400}
            height={311}
            className="block md:hidden  mt-24 md:mt-48 xl:mt-80 w-[95%] mx-auto"
          />

          <p className="font-normal text-sm md:text-base text-white opacity-60 text-center  w-[90%] xl:w-[50%] mx-auto">
            Tune into your inner warrior and become the ultimate fighter. Join
            the first ever fighter and martial arts social media. Lock in and
            tread the road to greatness through our In-house Ranking.
          </p>

          {user ? (
            <button
              onClick={logOut}
              className="mt-5 md:mt-10 font-bold text-sm text-white cursor-pointer bg-[#FF0000]  rounded-full w-[236px] h-[52px] block mx-auto"
            >
              Logout
            </button>
          ) : (
            <Link href={"/registration"}>
              <button className="mt-5 md:mt-10 font-bold text-sm text-white cursor-pointer bg-[#FF0000]  rounded-full w-[236px] h-[52px] block mx-auto">
                Register
              </button>
            </Link>
          )}
          <div className="flex justify-center gap-5 mt-5">
            <Link
              href=
                "https://www.facebook.com/share/1G1wHBj1Dh/?mibextid=wwXIfr"
              
              target="_blank"
            >
              <Image
                src={"/assets/svg/icon.svg"}
                alt=""
                width={52}
                height={52}
                className="cursor-pointer"
              />
            </Link>
            <Link href="https://instagram.com/fightr.app" target="_blank">
              <Image
                src={"/assets/svg/icon2.svg"}
                alt=""
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
          </div>
        </div>
      </div>
    </>
  );
}
