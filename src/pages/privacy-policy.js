import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import PrivacyPolicy from "@/components/privacy-policy";
import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="bg-[#0A0A0A] py-5">
        <Navbar />
      </div>

      <div className="bg-black w-[90%] 2xl:max-w-2xl mx-auto pt-10">
        <PrivacyPolicy />
      </div>
      <Footer />
    </>
  );
}
