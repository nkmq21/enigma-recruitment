import * as z from 'zod';

export const RegisterSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(6, {message: 'Password must be at least 6 characters long'}),
    name: z.string().min(1, { message: 'Name is required' })
    // TODO: For production, customize this password validation to handle complex situations.
    // password: z
    //     .string()
    //     .min(8, { message: 'Password must be at least 8 characters long' })
    //     .regex(/[a-zA-Z]/, { message: 'Password must contain at least one letter' })
    //     .regex(/[0-9]/, { message: 'Password must contain at least one number' }),
    // passwordConfirmation: z.string().min(6, {message: 'Password confirmation must be at least 6 characters long'}),
});

export const LoginSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(6, {message: 'Password must be at least 6 characters long'})
    // TODO: For production, customize this password validation to handle complex situations.
    // password: z
    //     .string()
    //     .min(8, { message: 'Password must be at least 8 characters long' })
    //     .regex(/[a-zA-Z]/, { message: 'Password must contain at least one letter' })
    //     .regex(/[0-9]/, { message: 'Password must contain at least one number' }),
});

export const CreatePasswordSchema = z.object({
    password: z.string().min(6, {message: 'Password must be at least 6 characters long'}),
    confirmPassword: z.string().min(6, {message: 'Password must be at least 6 characters long'})
});