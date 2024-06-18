import { z } from "zod"
import { nameRegex } from "./Regex"

export const checkOutSchema = z.object({
    firstName: z.string()
        .min(3, "First name invalid")
        .regex(nameRegex, "The name cannot contain special characters or numbers")
        .trim(),
    lastName: z.string()
        .min(3, "Last name invalid")
        .regex(nameRegex, "The name cannot contain special characters or numbers")
        .trim(),
    companyName: z.string()
        .min(3, "Company invalid")
        .trim(),
    zipCode: z.string()
        .regex(/^\d{5}-\d{3}$/, 'Invalid ZIP code')
        .trim(),
    countryRegion: z.string()
        .min(2, "Country or region invalid")
        .trim(),
    streetAddress: z.string()
        .min(3, "Street address invalid")
        .trim(),
    city: z.string()
        .min(3, "City invalid")
        .trim(),
    province: z.string()
        .min(2, "Province invalid")
        .trim(),
    addOnAddress: z.string().trim(),
    addInfo: z.string().trim(),
    email: z.string()
        .email("Email invalid")
        .trim(),
})

export type FormData = z.infer<typeof checkOutSchema>