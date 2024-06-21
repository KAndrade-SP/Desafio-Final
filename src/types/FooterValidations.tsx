import { z } from "zod"

export const footerSchema = z.object({
    email: z.string()
        .email("Email invalid")
        .max(40, 'Email invalid (Max 40 characters)')
        .trim(),
})

export type FormFooterData = z.infer<typeof footerSchema>