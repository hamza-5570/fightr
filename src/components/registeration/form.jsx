import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Dropdown from "../dropdown";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Form({ formik, handleStep }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="bg-res py-10">
         <Link href={'/'} >
   
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
          Create an Account
        </h2>
        <h4 className="font-normal text-base text-white opacity-50 text-center">
          Enter the following details to Register
        </h4>

        <div className="mt-5">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-6 bg-[#191919] rounded-[12px] p-3">
              <p className="font-medium text-[12px] text-[#605858]">
                First Name
              </p>
              <input
                type="text"
                placeholder="Jimmy"
                className="font-bold text-sm text-white outline-none bg-[#191919] w-full"
                {...formik.getFieldProps("firstName")}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <div className="text-red-500 text-xs">
                  {formik.errors.firstName}
                </div>
              )}
            </div>

            <div className="md:col-span-6 bg-[#191919] rounded-[12px] p-3">
              <p className="font-medium text-[12px] text-[#605858]">
                Last Name
              </p>
              <input
                type="text"
                placeholder="Cage"
                className="font-bold text-sm text-white outline-none bg-[#191919] w-full"
                {...formik.getFieldProps("lastName")}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <div className="text-red-500 text-xs">
                  {formik.errors.lastName}
                </div>
              )}
            </div>

            <div className="md:col-span-12 bg-[#191919] rounded-[12px] p-3">
              <p className="font-medium text-[12px] text-[#605858]">Email</p>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="font-bold text-sm text-white outline-none bg-[#191919] w-full"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-xs">
                  {formik.errors.email}
                </div>
              )}
            </div>

            <div className="md:col-span-12 bg-[#191919] rounded-[12px] p-3 relative">
              <p className="font-medium text-[12px] text-[#605858]">Password</p>
              <input
                type={visible ? "text" : "password"}
                placeholder="* * * * * * * * * * * *"
                className="font-bold text-sm text-white outline-none bg-[#191919] w-full pr-10"
                {...formik.getFieldProps("password")}
              />
              <div
                className="absolute right-4 top-6 cursor-pointer text-white"
                onClick={() => setVisible(!visible)}
              >
                {visible ? <FaEyeSlash /> : <FaEye />}
              </div>
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500 text-xs">
                  {formik.errors.password}
                </div>
              )}
            </div>

            {/* <div className="md:col-span-6 bg-[#191919] rounded-[12px] p-3">
              <p className="font-medium text-[12px] text-[#605858]">Age</p>
              <Dropdown
                value={formik.values.selectedValue}
                options={["10", "25", "50", "100"]}
                onChange={(val) => formik.setFieldValue("selectedValue", val)}
              />
            </div> */}

            <div className="md:col-span-6 bg-[#191919] rounded-[12px] p-3">
              <p className="font-medium text-[12px] text-[#605858]">
                Date of Birth (Optional)
              </p>
              <Dropdown
                value={formik.values.selectedDOB}
                options={["10", "25", "50", "100"]}
                onChange={(val) => formik.setFieldValue("selectedDOB", val)}
              />
            </div>

            <div className="md:col-span-6 bg-[#191919] rounded-[12px] p-3">
              <p className="font-medium text-[12px] text-[#605858]">Gender</p>
              <Dropdown
                value={formik.values.gender}
                options={["M", "F"]}
                onChange={(val) => formik.setFieldValue("gender", val)}
              />
              {formik.touched.gender && formik.errors.gender && (
                <div className="text-red-500 text-xs">
                  {formik.errors.gender}
                </div>
              )}
            </div>

            <div className="md:col-span-6 bg-[#191919] rounded-[12px] p-3">
              <p className="font-medium text-[12px] text-[#605858]">
                Weight (Optional)
              </p>
              <input
                type="text"
                placeholder="80 KG"
                className="font-bold text-sm text-white outline-none bg-[#191919] w-full"
                {...formik.getFieldProps("weight")}
              />
            </div>

            <div className="md:col-span-6 bg-[#191919] rounded-[12px] p-3">
              <p className="font-medium text-[12px] text-[#605858]">
                Discipline (Optional)
              </p>
              <Dropdown
                value={formik.values.selectedDiscipline}
                options={["MMA", "Kickboxing", "Boxing"]}
                onChange={(val) =>
                  formik.setFieldValue("selectedDiscipline", val)
                }
              />
            </div>
          </div>

          <div className="mt-6 flex items-start gap-2">
            <label className="flex items-center gap-2 text-white text-sm cursor-pointer">
              <input
                type="checkbox"
                name="acceptPolicy"
                checked={formik.values.acceptPolicy}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="accent-[#FF0000] w-4 h-4 cursor-pointer"
              />
              I agree to the{" "}
              <Link href="/privacy-policy" className="text-[#FF0000] underline">
                Privacy Policy
              </Link>
            </label>
          </div>
          {formik.touched.acceptPolicy && formik.errors.acceptPolicy && (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.acceptPolicy}
            </div>
          )}

          <button
            type="button"
            disabled={
              !formik.values.firstName ||
              !formik.values.lastName ||
              !formik.values.email ||
              !formik.values.password ||
              !formik.values.gender ||
              !formik.values.acceptPolicy
            }
            onClick={handleStep}
            className="mt-8 font-bold text-sm text-white cursor-pointer bg-[#FF0000] rounded-full w-full md:w-[236px] h-[52px] block mx-auto disabled:bg-[#383838] disabled:cursor-not-allowed"
          >
            Continue
          </button>

          <div className="text-white text-center mt-5">
            Already have an account?{" "}
            <Link href="/login" className="text-[#FF0000] underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
