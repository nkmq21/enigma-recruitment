// src/app/api/cvs/builder/export/route.ts
import { NextRequest, NextResponse } from "next/server";
import Handlebars from "handlebars";
import * as Templates from "enigma/data/cvTemplates";

export async function POST(req: NextRequest) {
    try {
        const { payload, cvName, templateKey } = await req.json();
        const allTemplates = Templates as Record<string, string>;
        const template = allTemplates?.[templateKey] ?? allTemplates?.RESUME_TEMPLATE_1;
        const html = Handlebars.compile(template)(payload);
        const pdfEndpointToken = process.env.PDFENDPOINT_ACCESS_TOKEN!;

        const r = await fetch("https://api.pdfendpoint.com/v1/convert", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${pdfEndpointToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                html,
                orientation: "vertical",
                page_size: "A4",
                margin_top: "2cm",
                margin_bottom: "2cm",
                margin_left: "2cm",
                margin_right: "2cm",
                filename: cvName || "cv.pdf"
            }),
            cache: "no-store"
        });

        if (!r.ok) {
            const errText = await r.text();
            return NextResponse.json(
                { error: errText || r.statusText },
                { status: r.status || 500 }
            );
        }
        const json = await r.json();
        return NextResponse.json(json, {status: r.status});
    } catch (e: any) {
        return NextResponse.json({ error: e?.message ?? "Unknown error" }, { status: 500 });
    }
}