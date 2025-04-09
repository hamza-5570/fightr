import Dropdown from "@/components/dropdown";
import Image from "next/image";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/router";

export default function Registration() {
  const [visible, setVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("25");
  const [selectedDOB, setSelectedDOB] = useState("Select");
  const [selectedDiscipline, setSelectedDiscipline] = useState("Select");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [weight, setWeight] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      firstName,
      lastName,
      email,
      password,
      age: selectedValue,
      dob: selectedDOB,
      weight,
      discipline: selectedDiscipline,
    };

    console.log("Form Data:", formData);

    // Navigate after logging (optional)
    router.push("/activation");
  };

  return (
    <div className="bg-res py-10">
      <Image
        src={"/assets/svg/logo.svg"}
        alt=""
        width={196}
        height={32}
        className="w-[140px] md:w-auto mx-auto"
      />

      <div className="bg-[#141414] border-[1px] border-[#1d1d1d] mt-10 w-[90%] md:w-[80%] lg:w-[60%] xl:w-[40%] mx-auto p-5 md:p-10 rounded-[20px]">
        <h2 className="font-bold text-[24px] md:text-[32px] text-white text-center">
          Create an Account
        </h2>
        <h4 className="font-normal text-base text-white opacity-50 text-center">
          Enter following details to Register
        </h4>

        <form className="mt-5" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-6 bg-[#191919] rounded-[12px] p-3">
              <p className="font-medium text-[12px] text-[#605858]">First Name</p>
              <input
                type="text"
                placeholder="Jimmy"
                className="font-bold text-sm text-white outline-none bg-[#191919] w-full"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="md:col-span-6 bg-[#191919] rounded-[12px] p-3">
              <p className="font-medium text-[12px] text-[#605858]">Last Name</p>
              <input
                type="text"
                placeholder="Cage"
                className="font-bold text-sm text-white outline-none bg-[#191919] w-full"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="md:col-span-12 bg-[#191919] rounded-[12px] p-3">
              <p className="font-medium text-[12px] text-[#605858]">Email</p>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="font-bold text-sm text-white outline-none bg-[#191919] w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="md:col-span-12 bg-[#191919] rounded-[12px] p-3 relative">
              <p className="font-medium text-[12px] text-[#605858]">Password</p>
              <input
                type={visible ? "text" : "password"}
                placeholder="* * * * * * * * * * * *"
                className="font-bold text-sm text-white outline-none bg-[#191919] w-full pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className="absolute right-4 top-6 cursor-pointer text-white"
                onClick={() => setVisible(!visible)}
              >
                {visible ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

            <div className="md:col-span-6 bg-[#191919] rounded-[12px] p-3">
              <p className="font-medium text-[12px] text-[#605858]">Age</p>
              <Dropdown
                value={selectedValue}
                options={["10", "25", "50", "100"]}
                onChange={(val) => setSelectedValue(val)}
              />
            </div>

            <div className="md:col-span-6 bg-[#191919] rounded-[12px] p-3">
              <p className="font-medium text-[12px] text-[#605858]">
                Date of Birth (Optional)
              </p>
              <Dropdown
                value={selectedDOB}
                options={["10", "25", "50", "100"]}
                onChange={(val) => setSelectedDOB(val)}
              />
            </div>

            <div className="md:col-span-12 bg-[#191919] rounded-[12px] p-3">
              <p className="font-medium text-[12px] text-[#605858]">Weight (Optional)</p>
              <input
                type="text"
                placeholder="80 KG"
                className="font-bold text-sm text-white outline-none bg-[#191919] w-full"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>

            <div className="md:col-span-12 bg-[#191919] rounded-[12px] p-3">
              <p className="font-medium text-[12px] text-[#605858]">Discipline (Optional)</p>
              <Dropdown
                value={selectedDiscipline}
                options={["10", "25", "50", "100"]}
                onChange={(val) => setSelectedDiscipline(val)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 font-bold text-sm text-white cursor-pointer bg-[#FF0000] rounded-full w-full md:w-[236px] h-[52px] block mx-auto"
          >
            Register
          </button>

          <div className="flex justify-center gap-1 font-normal text-base text-white mt-4">
            <h4 className="opacity-50">Already a Member?</h4>
            <span className="cursor-pointer font-medium text-[#FF0000] opacity-100">
              Register
            </span>
          </div>

          <p className="font-medium text-base text-white text-center py-5">OR</p>
          <div className="flex justify-center gap-4">
            <Image src={"/assets/png/soc.png"} alt="" width={92} height={36} className="cursor-pointer" />
            <Image src={"/assets/png/soc2.png"} alt="" width={92} height={36} className="cursor-pointer" />
            <Image src={"/assets/png/soc3.png"} alt="" width={92} height={36} className="cursor-pointer" />
          </div>
        </form>
      </div>
    </div>
  );
}
