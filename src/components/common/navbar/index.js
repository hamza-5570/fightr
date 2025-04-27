"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 w-[90%] 2xl:max-w-2xl mx-auto py-4">
        <div className="hidden lg:flex gap-10 self-center">
          <Link
            href="/"
            className={`font-medium text-sm ${
              pathname === "/" ? "text-[#FF0000]" : "text-white"
            } hover:text-[#FF0000] cursor-pointer`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`font-medium text-sm ${
              pathname === "/about" ? "text-[#FF0000]" : "text-white"
            } hover:text-[#FF0000] cursor-pointer`}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className={`font-medium text-sm ${
              pathname === "/contact" ? "text-[#FF0000]" : "text-white"
            } hover:text-[#FF0000] cursor-pointer`}
          >
            Contact Us
          </Link>
          <Link
            href="/events"
            className={`font-medium text-sm ${
              pathname === "/events" ? "text-[#FF0000]" : "text-white"
            } hover:text-[#FF0000] cursor-pointer`}
          >
            Events
          </Link>
        </div>

        <div className="self-center">
          <Image
            src="/assets/png/logo.png"
            alt="Logo"
            width={196}
            height={32}
            className="w-[140px] md:w-auto lg:mx-auto"
          />
        </div>

        <div className="hidden lg:block">
        <Link href={'/registration'}>
          
          <button className="font-bold text-sm text-white cursor-pointer bg-[#FF0000] rounded-full w-[152px] h-[52px] block ml-auto">
            Get Started
          </button>
          </Link>
        </div>

        <div className="ml-auto block lg:hidden" onClick={toggleDrawer}>
          <IoMenu className="text-white text-[28px] cursor-pointer" />
        </div>
      </div>

      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ y: "-100%", x: "100%" }}
            animate={{ y: "0%", x: "0%" }}
            exit={{ y: "-100%", x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-full h-full bg-[#0A0A0A] z-50 shadow-xl p-6"
          >
            <div className="flex justify-between mb-6">
              <Image
                src="/assets/png/logo.png"
                alt="Logo"
                width={196}
                height={32}
                className="w-[140px] md:w-auto lg:mx-auto"
              />

              <IoClose
                className="text-3xl text-white cursor-pointer"
                onClick={toggleDrawer}
              />
            </div>
            <div className="flex flex-col gap-6 pt-10">
              <Link
                href="/"
                className={`font-medium text-lg ${
                  pathname === "/" ? "text-[#FF0000]" : "text-white"
                }`}
                onClick={toggleDrawer}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`font-medium text-lg ${
                  pathname === "/about" ? "text-[#FF0000]" : "text-white"
                }`}
                onClick={toggleDrawer}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className={`font-medium text-lg ${
                  pathname === "/contact" ? "text-[#FF0000]" : "text-white"
                }`}
                onClick={toggleDrawer}
              >
                Contact Us
              </Link>
              <Link
                href="/events"
                className={`font-medium text-lg ${
                  pathname === "/events" ? "text-[#FF0000]" : "text-white"
                }`}
                onClick={toggleDrawer}
              >
                Events
              </Link>
              <Link href={'/registration'}>
              <button className="mt-4 bg-[#FF0000] text-white font-bold py-2 px-4 rounded-full w-full">
                Get Started
              </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
