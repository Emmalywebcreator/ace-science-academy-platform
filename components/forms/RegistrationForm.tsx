"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/lib/supabase";
import {
  registrationSchema,
  type RegistrationData,
} from "@/lib/validation";
import RegistrationSummary from "./RegistrationSummary";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import SubjectSelection from "./SubjectSelection";
import { registerStudent } from "@/services/registration.service";

export default function RegistrationForm() {
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  
  const {
  register,
  handleSubmit,
  setValue,
  watch,
  formState: { errors },
} = useForm<RegistrationData>({
  resolver: zodResolver(registrationSchema),
  defaultValues: {
    studentName: "",
    schoolName: "",
    class: "SS1",
    parentName: "",
    phone: "",
    whatsapp: "",
    email: "",
    subjects: [],
  },
});
useEffect(() => {
    setValue("subjects", selectedSubjects, {
      shouldValidate: true,
    });
  }, [selectedSubjects, setValue]);


const onSubmit = async (data: RegistrationData) => {
  try {
    const registration = await registerStudent(data);

    console.log("Registration Successful");
    console.table(registration);
  } catch (error) {
    console.log("ERROR TYPE:", typeof error);
    console.dir(error, { depth: null });

    if (error instanceof Error) {
      console.log("MESSAGE:", error.message);
    }

    alert("Registration failed. Check the console.");
  }
};

const OnError = (errors: unknown) => {
  console.log(errors);
  alert("FAILED")
}
  return (
    <form className="space-y-10" onSubmit={handleSubmit(onSubmit,
      (errors) => {
        console.log("FORM ERRORS:", errors);
      }
    )}>

      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-900">
          Student Information
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <Input
            label="Student Full Name"
            placeholder="Enter student's full name"
            required
            error={errors.studentName?.message}
            {...register("studentName")}
          />

          <Input
            label="School Name"
            placeholder="Enter School name"
            className="w-full rounded border p-3"
            {...register("schoolName")}
          />

          {errors.schoolName && (
            <p className="text-red-600">
              {errors.schoolName.message}
            </p>
          )}
          <Select
            label="Current Class"
            required
            options={["SS1", "SS2", "SS3"]}
            error={errors.class?.message}
            {...register("class")}
          />
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-900">
          Parent / Guardian Information
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <Input
            label="Parent / Guardian Name"
            placeholder="Enter parent or guardian's name"
            required
            error={errors.parentName?.message}
            {...register("parentName")}
          />

          <Input
            label="Phone Number"
            type="tel"
            placeholder="+2347039301841"
            required
            error={errors.phone?.message}
            {...register("phone")}
          />

          <Input
            label="WhatsApp Number"
            type="tel"
            placeholder="+2349055232108"
            required
            error={errors.whatsapp?.message}
            {...register("whatsapp")}
          />

          <Input
            label="Email Address"
            type="email"
            placeholder="Optional"
            error={errors.email?.message}
            {...register("email")}
          />
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-900">
          Subject Selection
        </h2>

      <SubjectSelection
        selectedSubjects={selectedSubjects}
        setSelectedSubjects={setSelectedSubjects}
      />      
      </section>
      <RegistrationSummary
        selectedSubjects={selectedSubjects}
      />
      {errors.subjects && (
        <p className="text-sm text-red-600">
          {errors.subjects.message}
        </p>
      )}
      <button
        type="submit"
        className="rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
      >
        Register
      </button>

    </form>
  );
}