import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import TermsService from "@/components/terms-services";
import React from "react";

export default function TermsServicePage() {
  return (
    <>
      <div className="bg-[#0A0A0A] py-5">
        <Navbar />
      </div>

      <div className="bg-black w-[90%] 2xl:max-w-2xl mx-auto pt-10">
        <TermsService />
      </div>
      <Footer />
    </>
  );
}
