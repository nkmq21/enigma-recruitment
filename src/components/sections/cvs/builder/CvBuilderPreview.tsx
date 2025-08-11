"use client";
import { memo, useDeferredValue, useMemo } from "react";
import { Box, Paper } from "@mui/material";
import Handlebars from "handlebars";

// tiny in-memory cache so we compile each template only once
const compiledCache = new Map<string, Handlebars.TemplateDelegate>();

function getCompiled(tpl: string) {
    let fn = compiledCache.get(tpl);
    if (!fn) {
        fn = Handlebars.compile(tpl);
        compiledCache.set(tpl, fn);
    }
    return fn!;
}

function CvBuilderPreview({
                              template,
                              data,
                          }: {
    template: string;
    data: any;
}) {
    // Defer low-priority updates (keeps inputs responsive)
    const deferred = useDeferredValue(data);

    // Compile once per template, reuse compiled function
    const compile = useMemo(() => getCompiled(template), [template]);

    // Compute HTML as derived data (no setState + effect)
    const html = useMemo(() => compile(deferred), [compile, deferred]);

    return (
        <Paper
            elevation={2}
            sx={{
                borderRadius: 2,
                overflow: "hidden",
                border: "1px solid #E5E7EB",
                backgroundColor: "#f9fafb",
            }}
        >
            <Box
                sx={{
                    "& .page": {
                        zoom: .9,
                        m: 3,
                    },
                    overflow: "visible",
                    pb: 0
                }}
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </Paper>
    );
}

export default memo(CvBuilderPreview);
