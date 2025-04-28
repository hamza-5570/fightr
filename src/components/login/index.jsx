import { createClient } from "@/supabase/supabase-component";
import { useFormik } from "formik";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "sonner";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Login() {
  const supabase = createClient();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);

      const { data, error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });

      setLoading(false);
      if (error) {
        toast.error(error.message);
        return;
      }

      localStorage.setItem("user", JSON.stringify(data.user));
      toast.success("Login successful!");
      router.push("/");
    },
  });
  return (
    <div className="bg-res py-10">
      <Image
        src="/assets/png/logo.png"
        alt=""
        width={196}
        height={32}
        className="w-[140px] md:w-auto mx-auto"
      />

      <form
        onSubmit={formik.handleSubmit}
        className="bg-[#141414] border-[1px] border-[#1d1d1d] mt-10 w-[90%] md:w-[80%] lg:w-[60%] xl:w-[40%] mx-auto p-5 md:p-10 rounded-[20px]"
      >
        <h2 className="font-bold text-[24px] md:text-[32px] text-white text-center">
          Login to Your Account
        </h2>
        <h4 className="font-normal text-base text-white opacity-50 text-center">
          Enter email and password to login
        </h4>

        <div className="mt-5">
          <div className="grid md:grid-cols-12 gap-8">
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
          </div>

          <button
            type="submit"
            className="mt-8 font-bold text-sm text-white cursor-pointer bg-[#FF0000] rounded-full w-full md:w-[236px] h-[52px] block mx-auto"
          >
            {loading ? "Loading..." : "Login"}
          </button>

          <div className="text-white mt-5">
            Don&apos;t have an account?{" "}
            <Link href="/registration" className="text-[#FF0000] underline">
              Register
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
