// src/app/api/cvs/builder/drafts/route.ts
import {NextRequest, NextResponse} from "next/server";
import {createDraft, getDrafts} from "enigma/services/cvDocumentService";

export async function POST(req: NextRequest) {
    try {
        const {user_id, template_key, data, draft_limit} = await req.json();

        if (!user_id || !template_key) {
            return NextResponse.json({error: "user_id and template_key required"}, {status: 400});
        }

        const result = await createDraft({
            user_id,
            template_key,
            data,
            draftLimit: draft_limit ?? 5,
        });

        if (result.error) return NextResponse.json({error: result.error}, {status: 400});
        return NextResponse.json(result.data, {status: 201});
    } catch (e: any) {
        return NextResponse.json({error: e?.message ?? "Unknown error"}, {status: 500});
    }
}

export async function GET(req: NextRequest) {
    const {searchParams} = new URL(req.url);
    const userId = searchParams.get("user_id");
    const limit = Number(searchParams.get("limit") ?? 5);
    if (!userId) {
        return NextResponse.json({error: "user_id required"}, {status: 400});
    }
    try {
        const drafts = await getDrafts(userId, limit);
        if (drafts.error || !drafts.data) {
            return NextResponse.json({error: drafts.error || "No drafts are loaded."}, {status: 400});
        }
        return NextResponse.json(drafts.data, {status: 201});
    } catch (e: any) {
        return NextResponse.json({error: e?.message ?? "Unknown error"}, {status: 500});
    }
}
