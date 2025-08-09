// src/repositories/userRepository.ts
"use server";
import type {User, Account, UserRegister} from "enigma/types/models";
import {prisma} from "../../prisma/prisma";
import type {GenericResponse, PaginatedUsers} from "enigma/types/DTOs";

export async function getPaginatedUsers(page: number = 1, pageSize: number = 10): Promise<GenericResponse<PaginatedUsers>> {
    const skip = (page - 1) * pageSize;
    const users = await prisma.user.findMany({
        skip,
        take: pageSize
    });
    if (!users) {
        return {error: 'No users found!'};
    }
    const total = await prisma.user.count();
    return {data: {users, total}};
}

export async function getAllUsers(): Promise<GenericResponse<User[]>> {
    try {
        const users = await prisma.user.findMany();
        if (!users) {
            return {error: 'No users found!'};
        }
        return {data: users};
    } catch (error) {
        return {error: error instanceof Error
                ? `Database error: ${error.message}`
                : 'An unexpected error occurred.'};
    }
}

export async function getUserById(id: string): Promise<GenericResponse<User>> {
    try {
        const user = await prisma.user.findUnique({
            where: {id: parseInt(id)}
        });
        if (!user) {
            return {error: `User with ID ${id} not found.`};
        }
        return {data: user};
    } catch (error) {
        return {error: error instanceof Error
                ? `Database error: ${error.message}`
                : 'An unexpected error occurred.'};
    }
}

export async function getAccountByUserId(userId: string): Promise<GenericResponse<Account>> {
    // Fetch the user account from the database if they log in with 3rd party services
    try {
        const account = await prisma.account.findFirst({
            where: {userId: parseInt(userId)}
        });
        if (!account) {
            return {error: `Account for user ID ${userId} not found.`};
        }
        return {data: account};
    } catch (error) {
        return {error: error instanceof Error
                ? `Database error: ${error.message}`
                : 'An unexpected error occurred.'};
    }
}

export async function getUserByEmail(email: string): Promise<GenericResponse<User>> {
    try {
        const user = await prisma.user.findUnique({
            where: {email: email.toLowerCase()}
        });
        if (!user) {
            return {error: `User with email ${email} not found.`};
        }
        return {data: user};
    } catch (error) {
        return {error: error instanceof Error
                ? `Database error: ${error.message}`
                : 'An unexpected error occurred.'};
    }
}

export async function updateUserById(id: string, data: Partial<User>): Promise<GenericResponse<User>> {
    try {
        const user = await prisma.user.update({
            where: {id: parseInt(id)},
            data
        });
        return {data: user};
    } catch (error) {
        return {error: error instanceof Error
                ? `Database error: ${error.message}`
                : 'An unexpected error occurred.'};
    }
}

export async function updateUserByEmail(email: string, data: Partial<User>): Promise<GenericResponse<User>> {
    try {
        const user = await prisma.user.update({
            where: {email: email.toLowerCase()},
            data
        });
        return {data: user};
    } catch (error) {
        return {error: error instanceof Error
                ? `Database error: ${error.message}`
                : 'An unexpected error occurred.'};
    }
}

export async function createUser(data: UserRegister): Promise<GenericResponse<User>> {
    try {
        const user = await prisma.user.create({
            data: {
                ...data,
                email: data.email.toLowerCase() // Ensure email is stored in lowercase
            }
        });
        return {data: user};
    } catch (error) {
        return {error: error instanceof Error
                ? `Database error: ${error.message}`
                : 'An unexpected error occurred.'};
    }
}