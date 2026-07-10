import { z } from "zod";

export const registrationSchema = z.object({
  studentName: z
    .string()
    .min(3, "Student name must be at least 3 characters"),

  schoolName: z.string().optional(),

  class: z.enum(["SS1", "SS2", "SS3"], {
    error: "Please select a class",
  }),

  parentName: z
    .string()
    .min(3, "Parent name must be at least 3 characters"),

  phone: z
    .string()
    .min(11, "Enter a valid phone number"),

  whatsapp: z
    .string()
    .min(11, "Enter a valid WhatsApp number"),

  email: z
    .string()
    .email("Enter a valid email")
    .or(z.literal("")),

  subjects: z
    .array(z.string())
    .min(1, "Select at least one subject"),
});

export type RegistrationData = z.infer<typeof registrationSchema>;