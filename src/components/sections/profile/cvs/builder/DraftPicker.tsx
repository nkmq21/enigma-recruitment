// src/components/sections/cvs/builder/DraftPicker.tsx
"use client";
import {useEffect, useMemo, useState} from "react";
import {
    Box, Button, CircularProgress, FormControl, IconButton, InputLabel, MenuItem,
    Select, Stack, Tooltip, Typography
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import type {CvDocument} from "enigma/types/models";
import {toDisplayValue} from "enigma/utils/dateFormat";

interface Props {
    userId?: string | null;
    limit?: number;                    // default 5
    onLoad: (draft: CvDocument) => void; // send the picked draft back
    onError?: (msg: string) => void;   // optional
}

/**
 * Fetches drafts via GET /api/cvs/builder/drafts?user_id=...&limit=...
 * Expected response: DraftRow[]
 * (If your API uses POST or different shape, adjust fetcher below.)
 */
export default function DraftPicker({userId, limit = 5, onLoad, onError}: Props) {
    const [drafts, setDrafts] = useState<CvDocument[]>([]);
    const [loading, setLoading] = useState(false);
    const [selectedId, setSelectedId] = useState<string>("");

    const selected = useMemo(
        () => drafts.find(d => d.id === selectedId) || null,
        [drafts, selectedId]
    );

    const fetchDrafts = async () => {
        if (!userId) {
            setDrafts([]);
            setSelectedId("");
            return;
        }
        setLoading(true);
        try {
            const response = await fetch(`/api/cvs/builder/drafts?user_id=${encodeURIComponent(userId)}&limit=${limit}`, {
                method: "GET",
                headers: {"Content-Type": "application/json"},
                cache: "no-store"
            });
            const result = await response.json();
            if (!response.ok || result.error) {
                onError?.(result?.error || "Failed to load drafts");
                setDrafts([]);
                setSelectedId("");
                return;
            }

            const rows: CvDocument[] = Array.isArray(result)
                ? result : Array.isArray(result?.data)
                    ? result.data : [];
            setDrafts(rows);
            setSelectedId((prev) => {
                // keep selection if still present
                if (prev && rows.some((d) => d.id === prev)) return prev;
                return rows[0]?.id ?? "";
            });

        } catch (e: any) {
            onError?.(e?.message || "Failed to load drafts");
            setDrafts([]);
            setSelectedId("");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDrafts(); /* load on mount / user change */
    }, [userId, limit]);

    return (
        <Box>
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{mb: 1}}>
                <Typography variant="subtitle1" sx={{fontWeight: 600}}>Drafts</Typography>
                <Tooltip title="Refresh">
            <span>
                <IconButton onClick={fetchDrafts} size="small" disabled={loading || !userId}>
                  {loading ? <CircularProgress size={18}/> : <RefreshIcon fontSize="small"/>}
                </IconButton>
            </span>
                </Tooltip>
            </Stack>

            <Stack direction={{xs: "column", mdx: "row"}} spacing={1.5} alignItems={{xs: "stretch", mdx: "center"}}>
                <FormControl fullWidth disabled={!userId || loading || drafts.length === 0}>
                    <InputLabel id="draft-select-label">Select draft</InputLabel>
                    <Select
                        labelId="draft-select-label"
                        label="Select draft"
                        value={selectedId}
                        onChange={(e) => setSelectedId(e.target.value as string)}
                    >
                        {drafts.map((d) => (
                            <MenuItem key={d.id} value={d.id}>
                                {/* v#: template • updated_at */}
                                v{d.version} • Template {d.template_key.split("_")[2]} • {new Date(d.updated_at).toLocaleString()}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <Button
                    variant="outlined"
                    disabled={!selected}
                    onClick={() => selected && onLoad(selected)}
                    sx={{whiteSpace: "nowrap"}}
                >
                    Load draft
                </Button>
            </Stack>
        </Box>
    );
}