import { z } from 'zod'

export const contactMethods = ['mobile', 'email'] as const

export const CreateEmployeeSchema = z.object({
  name: z
    .string({
      required_error: 'name is required',
      invalid_type_error: 'name must be a string',
    })
    .trim()
    .min(1, { message: 'name is required' }),
  line_1: z.string().trim().min(1, { message: 'address line 1 is required' }),
  city: z.string().trim().min(1, { message: 'city is required' }),
  country: z.string().trim().min(1, { message: 'country is required' }),
  zipcode: z.number().min(6).max(6, { message: 'zipcode is required' }),
  contact_method: z.enum(contactMethods),
  email: z
    .string()
    .trim()
    .email({ message: 'invalid email address' })
    .optional(),
  mobile: z
    .string()
    .trim()
    .min(10, { message: 'phone number must contain at least 10 digits' })
    .regex(new RegExp(/^(\+\d{1,3}[- ]?)?\d{10}$/), 'invalid phone number')
    .optional(),
})
