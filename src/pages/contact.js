import Image from "next/image";
import Link from "next/link";

export default function Registration() {
  return (
    <div className="bg-res py-10">
      <Link href={"/"}>
        <Image
          src="/assets/png/logo.png"
          alt=""
          width={196}
          height={32}
          className="w-[140px] md:w-auto mx-auto"
        />
      </Link>
      <div className="bg-[#141414] border-[1px] border-[#1d1d1d] mt-10 w-[90%] md:w-[80%] lg:w-[60%] xl:w-[40%] mx-auto p-5 md:p-10 rounded-[20px]">
        <h2 className="font-bold text-[24px] md:text-[32px] text-white text-center">
          Contact Us
        </h2>

        <form className="mt-5">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-12 bg-[#191919] rounded-[12px] p-3">
              <p className="font-medium text-[12px] text-[#605858]">Email</p>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="font-bold text-sm text-white outline-none bg-[#191919] w-full"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 font-bold text-sm text-white cursor-pointer bg-[#FF0000] rounded-full w-full md:w-[236px] h-[52px] block mx-auto"
          >
            Submit
          </button>
        </form>
        <div className="flex justify-center gap-5 mt-5">
          <Link
            href="https://www.facebook.com/share/1G1wHBj1Dh/?mibextid=wwXIfr"
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
          <Link href='https://instagram.com/fightr.app' target="_blank">
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
  );
}
