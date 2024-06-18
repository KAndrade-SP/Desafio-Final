import { z } from "zod"
import { nameRegex } from "./Regex"

export const contactSchema = z.object({
    name: z.string()
        .min(3, "Name invalid")
        .regex(nameRegex, "The name cannot contain special characters or numbers")
        .trim(),
    email: z.string()
        .email("Email invalid")
        .trim(),
    subject: z.string()
        .min(3, 'Subject invalid')
        .trim(),
    message: z.string()
        .min(3, 'Message invalid')
        .trim(),
})

export type FormContactData = z.infer<typeof contactSchema>