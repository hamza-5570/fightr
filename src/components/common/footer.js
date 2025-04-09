import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <>
      <div className="bg-[#131313] pt-10 md:pt-20 pb-10 mt-16 lg:mt-28">
        <div className="grid lg:grid-cols-2 w-[90%] 2xl:max-w-2xl mx-auto">
          <div>
            <Image
              src={"/assets/svg/logo.svg"}
              alt=""
              width={196}
              height={32}
              className="mx-auto md:mx-0"
            />
            <h4 className="text-center md:text-start font-normal text-sm xl:text-base text-white opacity-50 mt-5">
              Fightr is a platform built for fighters, by fighters, bringing
              real-world achievements online. With personalized plans, facility
              maps, and spirited challenges, we empower continuous growth.
            </h4>

           <div className="flex justify-center md:justify-start gap-2 mt-5">
            <Image src={'/assets/svg/fsoc.svg'} alt="" width={52} height={52} className="cursor-pointer" />
            <Image src={'/assets/svg/fsoc2.svg'} alt="" width={52} height={52} className="cursor-pointer" />
            <Image src={'/assets/svg/fsoc3.svg'} alt="" width={52} height={52} className="cursor-pointer" />
            <Image src={'/assets/svg/fsoc4.svg'} alt="" width={52} height={52} className="cursor-pointer" />
           </div>

          </div>

         <div className="flex gap-20 lg:justify-end mt-10 lg:mt-0">
            <div>
                <p className="font-bold text-sm text-white">Useful Links</p>
                <p className="font-medium text-[12px] text-white opacity-50 hover:opacity-100 cursor-pointer mt-5">Privacy Policy</p>
                <p className="font-medium text-[12px] text-white opacity-50 hover:opacity-100 cursor-pointer mt-5">Refund Policy</p>
                <p className="font-medium text-[12px] text-white opacity-50 hover:opacity-100 cursor-pointer mt-5">Frequently Asked Questions</p>
                <p className="font-medium text-[12px] text-white opacity-50 hover:opacity-100 cursor-pointer mt-5">Work with Us</p>
            </div>

            <div>
                <p className="font-bold text-sm text-white">Contact Us</p>
                <p className="font-medium text-[12px] text-white opacity-50 hover:opacity-100 cursor-pointer mt-5">support@eloblaze.com</p>
                <p className="font-medium text-[12px] text-white opacity-50 hover:opacity-100 cursor-pointer mt-5">+1 2332 3453 334</p>
            </div>

         </div>

        </div>

        <p className="font-medium text-[12px] md:text-sm text-white opacity-50 text-center mt-10">Copyright © 2025 FIGHTR .All rights reserved.</p>
      
      <div className="flex gap-3 justify-center mt-5">
      <p className="font-medium text-[10px] text-white ">Privacy Policy</p>
      <p className="font-medium text-[10px] text-white ">Fulfilment Policy</p>
      <p className="font-medium text-[10px] text-white ">Terms of Service</p>
      </div>
      </div>
    </>
  );
}
