// src/services/userService.ts
"use server";
import {Account, User, UserRegister} from "enigma/types/models";
import * as _userRepository from "enigma/repositories/userRepository";
import type {GenericResponse, PaginatedUsers} from "enigma/types/DTOs";

export interface UserProps {
    id: number;
    email: string;
    name: string;
    role: string;
    status: string;
    image: string | null;
    dob: Date | null;
    address: string | null;
    emailVerified?: Date;
}

export async function getPaginatedUsers(page: number = 1, pageSize: number = 10): Promise<GenericResponse<PaginatedUsers>> {
    const result = await _userRepository.getPaginatedUsers(page, pageSize);
    if (result.error) {
        return {error: result.error};
    }
    if (!result.data) {
        return {error: 'No users found!'};
    }
    return {data: result.data};
}

export async function getUsers(): Promise<GenericResponse<User[]>> {
    const result = await _userRepository.getAllUsers();
    if (result.error) {
        return {error: result.error};
    }
    if (!result.data) {
        return {error: 'No users found!'};
    }
    return {data: result.data};
}

export async function getUser(input: string, type: "id" | "email"): Promise<GenericResponse<User>> {
    const result = type === "id"
        ? await _userRepository.getUserById(input)
        : await _userRepository.getUserByEmail(input);
    if (result.error) {
        return {error: result.error};
    }
    if (!result.data) {
        return {error: 'User not found'};
    }
    return {data: result.data};
}

export async function getAccount(userId: string): Promise<GenericResponse<Account>> {
    const result = await _userRepository.getAccountByUserId(userId);
    if (result.error) {
        return {error: result.error};
    }
    if (!result.data) {
        return {error: 'Account not found'};
    }
    return {data: result.data};
}

export async function updateUser(input: string, type: "id" | "email", data: Partial<User>): Promise<GenericResponse<User>> {
    const result = type === "id"
        ? await _userRepository.updateUserById(input, data)
        : await _userRepository.updateUserByEmail(input, data);
    if (result.error) {
        return {error: result.error};
    }
    if (!result.data) {
        return {error: 'User not found or update failed'};
    }
    return {data: result.data};
}

export async function createUser(data: UserRegister): Promise<GenericResponse<boolean>> {
    try {
        const existingUser = await _userRepository.getUserByEmail(data.email);
        if (existingUser.data) {
            return {error: 'User with this email already exists'};
        }
        const result = await _userRepository.createUser(data);
        if (!result || !result.data || result.error) {
            return {error: result.error || 'Failed to create user'};
        }
        return {data: true};
    } catch (error) {
        return {error: error instanceof Error ? error.message : 'An unexpected error occurred'};
    }
}