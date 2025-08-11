import { memo } from "react";
import Grid from "@mui/material/Grid";
import { Paper, Stack, Typography, IconButton, Tooltip, Divider, TextField, Box } from "@mui/material";
import { Add, Delete } from "@mui/icons-material";
import type { ExperienceItem } from "enigma/types/cvBuilder";

interface Props {
    items: ExperienceItem[];
    onAdd: () => void;
    onRemove: (index: number) => void;
    onChange: (index: number, key: keyof ExperienceItem, value: any) => void;
    onAddBullet: (index: number) => void;
    onRemoveBullet: (index: number, bulletIndex: number) => void;
    onBulletChange: (index: number, bulletIndex: number, value: string) => void;
}

function Experience({
                               items, onAdd, onRemove, onChange, onAddBullet, onRemoveBullet, onBulletChange,
                           }: Props) {
    return (
        <Paper elevation={1} sx={{ p: 3, borderRadius: 2, border: "1px solid #E5E7EB" }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
                <Typography variant="h6" sx={{ color: "#101828" }}>Experience</Typography>
                <Tooltip title="Add job">
                    <IconButton onClick={onAdd} size="small"><Add fontSize="small" /></IconButton>
                </Tooltip>
            </Stack>

            <Stack spacing={3}>
                {items.map((job, idx) => (
                    <Box key={idx} sx={{ p: 2, borderRadius: 2, border: "1px solid #EDF2F7" }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Job #{idx + 1}</Typography>
                            <Tooltip title="Remove job">
                                <IconButton onClick={() => onRemove(idx)} size="small"><Delete fontSize="small" /></IconButton>
                            </Tooltip>
                        </Stack>

                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, mdx: 6 }}>
                                <TextField label="Company" fullWidth value={job.company}
                                           onChange={(e) => onChange(idx, "company", e.target.value)} />
                            </Grid>
                            <Grid size={{ xs: 12, mdx: 6 }}>
                                <TextField label="Role" fullWidth value={job.role}
                                           onChange={(e) => onChange(idx, "role", e.target.value)} />
                            </Grid>
                            <Grid size={{ xs: 12, mdx: 6 }}>
                                <TextField label="Location" fullWidth value={job.location}
                                           onChange={(e) => onChange(idx, "location", e.target.value)} />
                            </Grid>
                            <Grid size={{ xs: 6, mdx: 3 }}>
                                <TextField label="Start" fullWidth value={job.start}
                                           onChange={(e) => onChange(idx, "start", e.target.value)} />
                            </Grid>
                            <Grid size={{ xs: 6, mdx: 3 }}>
                                <TextField label="End (blank = Present)" fullWidth value={job.end}
                                           onChange={(e) => onChange(idx, "end", e.target.value)} />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextField label="Summary" fullWidth multiline rows={3} value={job.summary}
                                           onChange={(e) => onChange(idx, "summary", e.target.value)} />
                            </Grid>
                        </Grid>

                        <Divider sx={{ my: 2 }} />

                        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
                            <Typography variant="subtitle2">Bullets</Typography>
                            <Tooltip title="Add bullet">
                                <IconButton onClick={() => onAddBullet(idx)} size="small"><Add fontSize="small" /></IconButton>
                            </Tooltip>
                        </Stack>

                        <Stack spacing={1.5}>
                            {job.bullets.map((b, bIdx) => (
                                <Stack key={bIdx} direction="row" spacing={1} alignItems="center">
                                    <TextField fullWidth placeholder="Achievement or responsibility" value={b}
                                               onChange={(e) => onBulletChange(idx, bIdx, e.target.value)} />
                                    <Tooltip title="Remove bullet">
                                        <IconButton onClick={() => onRemoveBullet(idx, bIdx)} size="small">
                                            <Delete fontSize="small" />
                                        </IconButton>
                                    </Tooltip>
                                </Stack>
                            ))}
                        </Stack>
                    </Box>
                ))}
            </Stack>
        </Paper>
    );
}

export default memo(Experience);
