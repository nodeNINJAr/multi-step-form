import {z} from "zod"

// 
const personalSchema = z.object({
       fullName: z.string().min(1, {message:'Full name is required'}),
       email: z.string().email({message:'Invalid email format'}),
       phoneNumber: z.string().min(10, { message:'Phone number must be at least 10 digits'}),
    });

const addressSchema = z.object({
       streetAddress: z.string().min(1, {message:'Street address is required'}),
       city: z.string().min(1, {message:'City is required'}),
       zipCode: z.string().regex(/^\d{5,}$/, {message : 'Zip code must be at least 5 digits'}),
    }); 
 
const accountSchema = z.object({
      userName: z.string().min(4, {message:'Username must be at least 4 characters'}),
      password: z.string().min(6, {message : 'Password must be at least 6 characters'}),
      confirmPassword: z.string(),
    }).refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
    });    

export const formSchema = z.object({
      personal: personalSchema,
      address: addressSchema,
      account: accountSchema,
    });   