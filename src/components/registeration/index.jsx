import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { createClient } from "@/supabase/supabase-component";
import { toast } from "sonner";
import Form from "./form";
import Steps from "../steps";

export default function Registeration() {
  const router = useRouter();
  const { step } = router.query;
  const supabase = createClient();
  const [loading, setLoading] = useState(false);

  const handleStep = () => {
    router.replace({ query: { step: "true" } });
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      weight: "",
      gender: "",
      selectedValue: "25",
      selectedDOB: "",
      selectedDiscipline: "",
      acceptPolicy: false,
      user_role: "",
      club_name: "",
      club_address: "",
      postal_code: "",
      city: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      gender: Yup.string().required("Gender is required"),
      weight: Yup.string(),
      acceptPolicy: Yup.bool()
        .oneOf([true], "You must accept the privacy policy")
        .required("Required"),
      user_role: Yup.string().required("User role is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);

      const metadata = {
        firstName: values.firstName,
        lastName: values.lastName,
        gender: values.gender !== "Select" ? String(values.gender) : null,
        age:
          values.selectedValue !== "Select"
            ? String(values.selectedValue)
            : null,
        dob:
          values.selectedDOB !== "Select" ? String(values.selectedDOB) : null,
        weight: values.weight || null,
        discipline:
          values.selectedDiscipline !== "Select"
            ? String(values.selectedDiscipline)
            : null,
        user_role: values.user_role,
        club_name: values.club_name || null,
        club_address: values.club_address || null,
        postal_code: values.postal_code || null,
        city: values.city || null,
      };

      const { data, error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          data: metadata,
          emailRedirectTo: "http://localhost:3001/activation",
        },
      });

      setLoading(false);

      if (error) {
        if (
          error.message.includes("User already registered") ||
          error.message.includes("User already exists")
        ) {
          toast.error("User already exists with this email.");
        } else {
          toast.error(error.message);
        }
        return;
      }

      localStorage.setItem("user", JSON.stringify(data.user));
      toast.success("Signup successful! Check your email for verification.");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {step === "true" ? (
        <Steps formik={formik} loading={loading} />
      ) : (
        <Form formik={formik} handleStep={handleStep} />
      )}
    </form>
  );
}
