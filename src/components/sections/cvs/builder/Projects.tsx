import { memo } from "react";
import Grid from "@mui/material/Grid";
import { Paper, Stack, Typography, IconButton, Tooltip, Divider, TextField, Box } from "@mui/material";
import { Add, Delete } from "@mui/icons-material";
import type { ProjectItem } from "enigma/types/cvBuilder";

interface Props {
    items: ProjectItem[];
    onAdd: () => void;
    onRemove: (index: number) => void;
    onChange: (index: number, key: keyof ProjectItem, value: any) => void;
    onAddBullet: (index: number) => void;
    onRemoveBullet: (index: number, bulletIndex: number) => void;
    onBulletChange: (index: number, bulletIndex: number, value: string) => void;
}

function Projects({ items, onAdd, onRemove, onChange, onAddBullet, onRemoveBullet, onBulletChange }: Props) {
    return (
        <Paper elevation={1} sx={{ p: 3, borderRadius: 2, border: "1px solid #E5E7EB" }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
                <Typography variant="h6" sx={{ color: "#101828" }}>Projects</Typography>
                <Tooltip title="Add project">
                    <IconButton onClick={onAdd} size="small"><Add fontSize="small" /></IconButton>
                </Tooltip>
            </Stack>

            <Stack spacing={3}>
                {items.map((p, idx) => (
                    <Box key={idx} sx={{ p: 2, borderRadius: 2, border: "1px solid #EDF2F7" }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Project #{idx + 1}</Typography>
                            <Tooltip title="Remove project">
                                <IconButton onClick={() => onRemove(idx)} size="small"><Delete fontSize="small" /></IconButton>
                            </Tooltip>
                        </Stack>

                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, mdx: 6 }}>
                                <TextField label="Name" fullWidth value={p.name}
                                           onChange={(e) => onChange(idx, "name", e.target.value)} />
                            </Grid>
                            <Grid size={{ xs: 12, mdx: 6 }}>
                                <TextField label="Link" fullWidth value={p.link}
                                           onChange={(e) => onChange(idx, "link", e.target.value)} />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextField label="Description" fullWidth multiline rows={3} value={p.description}
                                           onChange={(e) => onChange(idx, "description", e.target.value)} />
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
                            {p.bullets.map((b, bIdx) => (
                                <Stack key={bIdx} direction="row" spacing={1} alignItems="center">
                                    <TextField fullWidth placeholder="Project highlight" value={b}
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

export default memo(Projects);
