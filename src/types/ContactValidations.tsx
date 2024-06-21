import { z } from "zod"
import { nameRegex } from "./Regex"

export const contactSchema = z.object({
    name: z.string()
        .min(3, "Name invalid (Ex. Brendon)")
        .max(40, 'Name invalid (Max 40 characters)')
        .regex(nameRegex, "The name cannot contain special characters or numbers")
        .trim(),
    email: z.string()
        .email("Email invalid (Ex. user@maildomain.com")
        .max(40, 'Email invalid (Max 40 characters)')
        .trim(),
    subject: z.string()
        .min(3, 'Subject invalid (Ex. Israel)')
        .max(40, 'Email invalid (Max 40 characters)')
        .trim(),
    message: z.string()
        .min(3, 'Message invalid (Ex. I want to know some...)')
        .max(200, 'Message invalid (Max 200 characters)')
        .trim(),
})

export type FormContactData = z.infer<typeof contactSchema>