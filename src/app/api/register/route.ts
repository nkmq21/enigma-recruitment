import {NextResponse} from "next/server";
import {prisma} from "../../../../prisma/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined');
}

export async function POST(request: Request) {
    try {
        const {email, password, name} = await request.json();

        if (!email || !password || password.trim() === ''  || !name) {
            console.error("Email, password and user name are required.")
            return NextResponse.json(
                { error: 'Email, password and user name are required.' },
                { status: 400 }
            );
        }

        const isUserExisted = await prisma.user.findFirst({
            where: { email: email },
        });
        if (isUserExisted) {
            console.error("User already exists, please log in instead.")
            return NextResponse.json(
                { error: 'User already exists, please log in instead.' },
                { status: 409 }
            );
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await prisma.user.create({
            data: {
                email: email.toLowerCase(),
                password: hashedPassword,
                name: name
            },
        });

        // JWT Token signature
        // const token = jwt.sign(
        //     {userid: newUser.id, email: newUser.email, name: newUser.name},
        //     JWT_SECRET,
        //     { expiresIn: '1h' }
        // );

        // Remove sensitive info before returning
        // const { password: _, ...userData } = newUser;
        // return NextResponse.json({...userData, token});
        return NextResponse.json({"message": "User created successfully."}, { status: 201 });
    } catch (error) {
        console.error("Console log: " + error);
        return NextResponse.json(
            { error: 'Internal server error.' + error },
            { status: 500 }
        );
    }
}