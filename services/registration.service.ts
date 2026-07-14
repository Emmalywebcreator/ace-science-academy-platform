import { supabase } from "@/lib/supabase";
import { calculatePrice } from "@/lib/calculatePrice";
import type { RegistrationData } from "@/lib/validation";

export async function registerStudent(data: RegistrationData) {
  const pricing = calculatePrice(data.subjects);

  const { data: registration, error } = await supabase
    .from("registrations")
    .insert({
      student_name: data.studentName,
      school_name: data.schoolName,
      class: data.class,
      parent_name: data.parentName,
      phone: data.phone,
      whatsapp: data.whatsapp,
      email: data.email,
      selected_subjects: data.subjects,
      total_fee: pricing.total,
      payment_status: "pending",
    })
    .select()
    .single();

  if (error) {
    console.log("SUPABASE ERROR");
    console.log(error);
  
    throw error;
  }

  return registration;
}