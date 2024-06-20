import { z } from "zod"

export const footerSchema = z.object({
    email: z.string()
        .email("Email invalid")
        .trim(),
})

export type FormFooterData = z.infer<typeof footerSchema>