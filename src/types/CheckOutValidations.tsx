import { z } from "zod"
import { nameRegex } from "./Regex"

export const checkOutSchema = z.object({
    firstName: z.string()
        .min(3, "First name invalid (Ex. Brendon)")
        .max(40, 'First name invalid (Max 40 characters)')
        .regex(nameRegex, "The name cannot contain special characters or numbers")
        .trim(),
    lastName: z.string()
        .min(3, "Last name invalid (Ex. Urie)")
        .max(40, 'Last name invalid (Max 40 characters)')
        .regex(nameRegex, "The name cannot contain special characters or numbers")
        .trim(),
    companyName: z.string()
        .min(3, "Company invalid (Ex. Compass)")
        .max(40, 'Company invalid (Max 40 characters)')
        .trim(),
    zipCode: z.string()
        .regex(/^\d{5}-\d{3}$/, 'Invalid ZIP code (Ex. 00000-000)')
        .trim(),
    countryRegion: z.string()
        .min(2, "Country or region invalid (Ex. USA, Brazil etc.)")
        .max(40, 'Country or region invalid (Max 40 characters)')
        .trim(),
    streetAddress: z.string()
        .min(3, "Street address invalid (Ex. Alfred Street 55)")
        .max(40, 'Street address invalid (Max 40 characters)')
        .trim(),
    city: z.string()
        .min(3, "City invalid (Ex. New York)")
        .max(40, 'City invalid (Max 40 characters)')
        .trim(),
    province: z.string()
        .min(2, "Province invalid")
        .max(40, 'Province invalid (Max 40 characters)')
        .trim(),
    addOnAddress: z.string()
        .max(40, 'Add-on address invalid (Max 40 characters)')
        .trim(),
    addInfo: z.string()
        .max(40, 'Additional information invalid (Max 40 characters)')
        .trim(),
    email: z.string()
        .email("Email invalid (Ex. user@maildomain.com")
        .max(40, 'Email invalid (Max 40 characters)')
        .trim(),
})

export type FormData = z.infer<typeof checkOutSchema>