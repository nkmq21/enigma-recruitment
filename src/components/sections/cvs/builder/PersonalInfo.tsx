// src/components/sections/cvs/builder/PersonalInfo.tsx
import { memo, useCallback } from "react";
import Grid from "@mui/material/Grid";
import { Paper, TextField, Typography } from "@mui/material";
import type { Profile } from "enigma/types/cvBuilder";

interface Props {
    value: Profile;
    onChange: (key: keyof Profile, value: string) => void;
}

function PersonalInfo({ value, onChange }: Props) {
    const set = useCallback((k: keyof Profile) => (e: React.ChangeEvent<HTMLInputElement>) =>
        onChange(k, e.target.value), [onChange]);

    return (
        <Paper elevation={1} sx={{ p: 3, borderRadius: 2, border: "1px solid #E5E7EB" }}>
            <Typography variant="h6" sx={{ mb: 2, color: "#101828" }}>
                Personal Information
            </Typography>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, mdx: 6 }}>
                    <TextField label="Full Name" fullWidth value={value.name} onChange={set("name")} />
                </Grid>
                <Grid size={{ xs: 12, mdx: 6 }}>
                    <TextField label="Professional Title" fullWidth value={value.title} onChange={set("title")} />
                </Grid>
                <Grid size={{ xs: 12, mdx: 6 }}>
                    <TextField label="Email" fullWidth value={value.email} onChange={set("email")} />
                </Grid>
                <Grid size={{ xs: 12, mdx: 6 }}>
                    <TextField label="Phone" fullWidth value={value.phone} onChange={set("phone")} />
                </Grid>
                <Grid size={{ xs: 12, mdx: 6 }}>
                    <TextField label="Location" fullWidth value={value.location} onChange={set("location")} />
                </Grid>
                <Grid size={{ xs: 12, mdx: 6 }}>
                    <TextField label="Website" fullWidth value={value.website} onChange={set("website")} />
                </Grid>
                <Grid size={{ xs: 12 }}>
                    <TextField
                        label="Professional Summary"
                        fullWidth multiline rows={4}
                        value={value.summary} onChange={set("summary")}
                    />
                </Grid>
            </Grid>
        </Paper>
    );
}

export default memo(PersonalInfo);
