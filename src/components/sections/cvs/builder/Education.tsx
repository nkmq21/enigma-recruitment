// src/components/sections/cvs/builder/Education.tsx
import { memo } from "react";
import Grid from "@mui/material/Grid";
import { Paper, Stack, Typography, IconButton, Tooltip, TextField, Box } from "@mui/material";
import { Add, Delete } from "@mui/icons-material";
import type { EducationItem } from "enigma/types/cvBuilder";

interface Props {
    items: EducationItem[];
    onAdd: () => void;
    onRemove: (index: number) => void;
    onChange: (index: number, key: keyof EducationItem, value: any) => void;
}

function Education({ items, onAdd, onRemove, onChange }: Props) {
    return (
        <Paper elevation={1} sx={{ p: 3, borderRadius: 2, border: "1px solid #E5E7EB" }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
                <Typography variant="h6" sx={{ color: "#101828" }}>Education</Typography>
                <Tooltip title="Add education">
                    <IconButton onClick={onAdd} size="small"><Add fontSize="small" /></IconButton>
                </Tooltip>
            </Stack>

            <Stack spacing={3}>
                {items.map((e, idx) => (
                    <Box key={idx} sx={{ p: 2, borderRadius: 2, border: "1px solid #EDF2F7" }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Entry #{idx + 1}</Typography>
                            <Tooltip title="Remove education">
                                <IconButton onClick={() => onRemove(idx)} size="small"><Delete fontSize="small" /></IconButton>
                            </Tooltip>
                        </Stack>

                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, mdx: 6 }}>
                                <TextField label="School" fullWidth value={e.school}
                                           onChange={(ev) => onChange(idx, "school", ev.target.value)} />
                            </Grid>
                            <Grid size={{ xs: 12, mdx: 6 }}>
                                <TextField label="Degree" fullWidth value={e.degree}
                                           onChange={(ev) => onChange(idx, "degree", ev.target.value)} />
                            </Grid>
                            <Grid size={{ xs: 12, mdx: 6 }}>
                                <TextField label="Field" fullWidth value={e.field}
                                           onChange={(ev) => onChange(idx, "field", ev.target.value)} />
                            </Grid>
                            <Grid size={{ xs: 6, mdx: 3 }}>
                                <TextField label="Start" fullWidth value={e.start}
                                           onChange={(ev) => onChange(idx, "start", ev.target.value)} />
                            </Grid>
                            <Grid size={{ xs: 6, mdx: 3 }}>
                                <TextField label="End" fullWidth value={e.end}
                                           onChange={(ev) => onChange(idx, "end", ev.target.value)} />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextField label="Notes" fullWidth multiline rows={2} value={e.notes}
                                           onChange={(ev) => onChange(idx, "notes", ev.target.value)} />
                            </Grid>
                        </Grid>
                    </Box>
                ))}
            </Stack>
        </Paper>
    );
}

export default memo(Education);
