import * as z from 'zod';

export const RegisterSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    name: z.string().min(1, { message: 'Name is required' }),
    password: z
        .string()
        .min(8, { message: 'Password must be at least 8 characters long' })
        .regex(/[a-zA-Z]/, { message: 'Password must contain at least one letter' })
        .regex(/[0-9]/, { message: 'Password must contain at least one number' })
        .regex(/[^a-zA-Z0-9]/, { message: 'Password must contain at least one special character' })
});

export const LoginSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string()
});

export const CreatePasswordSchema = z.object({
    password: z
        .string()
        .min(8, { message: 'Password must be at least 8 characters long' })
        .regex(/[a-zA-Z]/, { message: 'Password must contain at least one letter' })
        .regex(/[0-9]/, { message: 'Password must contain at least one number' })
        .regex(/[^a-zA-Z0-9]/, { message: 'Password must contain at least one special character' }),
    confirmPassword: z
        .string()
        .min(8, { message: 'Password must be at least 8 characters long' })
        .regex(/[a-zA-Z]/, { message: 'Password must contain at least one letter' })
        .regex(/[0-9]/, { message: 'Password must contain at least one number' })
        .regex(/[^a-zA-Z0-9]/, { message: 'Password must contain at least one special character' })
});

export const ResetPasswordSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
});

export const ChangePasswordSchema = z.object({
    password: z
        .string()
        .min(8, { message: 'Password must be at least 8 characters long' })
        .regex(/[a-zA-Z]/, { message: 'Password must contain at least one letter' })
        .regex(/[0-9]/, { message: 'Password must contain at least one number' })
        .regex(/[^a-zA-Z0-9]/, { message: 'Password must contain at least one special character' }),
    confirmPassword: z
        .string()
        .min(8, { message: 'Password must be at least 8 characters long' })
        .regex(/[a-zA-Z]/, { message: 'Password must contain at least one letter' })
        .regex(/[0-9]/, { message: 'Password must contain at least one number' })
        .regex(/[^a-zA-Z0-9]/, { message: 'Password must contain at least one special character' })
});