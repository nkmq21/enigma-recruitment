// src/app/api/cvs/route.ts
import {NextRequest, NextResponse} from "next/server";
import {createCv, getAllCvs} from "enigma/services/cvService";
import type {Cv} from "enigma/types/models";
import {GenericResponse} from "enigma/types/DTOs";

export async function POST(req: NextRequest) {
    try {
        const {user_id, cv_url, cv_title, source_document_id, uploaded_time} = await req.json();

        if (!user_id) {
            return NextResponse.json({ error: "user_id required" }, { status: 400 });
        }

        const result = await createCv({user_id, cv_url, cv_title, source_document_id, uploaded_time});
        if (result.error) return NextResponse.json({ error: result.error }, { status: 400 });
        return NextResponse.json(result.data, { status: 201 });
    } catch (e: any) {
        return NextResponse.json({ error: e?.message ?? "Unknown error" }, { status: 500 });
    }
}

export async function GET(req: NextRequest) {
    try {
        const {searchParams} = new URL(req.url);
        const userid = searchParams.get("userid");
        if (!userid) {
            return NextResponse.json({error: "User ID is required"}, {status: 400});
        }
        const result: GenericResponse<Cv[]> = await getAllCvs(userid);
        if (result.error) {
            return NextResponse.json({error: result.error}, {status: 400});
        }
        return NextResponse.json({data: result.data}, {status: 200});
    } catch (e: unknown) {
        return NextResponse.json({error: e instanceof Error ? e.message : "Unknown error"}, {status: 500});
    }
}