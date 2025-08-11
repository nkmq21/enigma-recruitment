// src/components/sections/cvs/builder/MainContent.tsx
"use client";
import {useMemo, useState} from "react";
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Paper,
    Stack,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@mui/material";
import theme from "enigma/styles/theme";
import CvBuilderPreview from "enigma/components/sections/cvs/builder/CvBuilderPreview";
import * as Templates from "enigma/data/cvTemplates"; // every export should be a string HTML template
import {Session} from "next-auth";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useDeferredValue} from "react";
import PersonalInfo from "enigma/components/sections/cvs/builder/PersonalInfo";
import Experience from "enigma/components/sections/cvs/builder/Experience";
import Projects from "enigma/components/sections/cvs/builder/Projects";
import Education from "enigma/components/sections/cvs/builder/Education";
import SkillsMeta from "enigma/components/sections/cvs/builder/SkillsMeta";
import {initial} from "enigma/data/cvBuilderInitialData";

export default function MainContent({session}: { session: Session | null }) {
    const [data, setData] = useState(initial);
    const deferredData = useDeferredValue(data);
    // ---------- Template selector ----------
    const templateEntries = useMemo(() => {
        const t = Templates as Record<string, string>;
        return Object.entries(t).map(([key, tpl]) => ({
            key,
            label: key
                .replace(/^RESUME_?TEMPLATE_?/i, "Template ")
                .replace(/_/g, " ")
                .trim(),
            tpl,
        }));
    }, []);

    const [selectedTemplateKey, setSelectedTemplateKey] = useState(
        templateEntries[0]?.key ?? ""
    );
    const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
    const [message, setMessage] = useState<string>("");
    const [showPreview, setShowPreview] = useState(false);
    const [loading, setLoading] = useState(false);
    const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
    const isMdxUp = useMediaQuery(theme.breakpoints.up("mdx"));
    const isBetweenMdxAndLg = isMdxUp && !isLgUp;

    const leftSize = isLgUp
        ? {xs: 12, mdx: 5, lg: 5}                 // Desktop, > 1200px: render as usual, 5:7 ratio
        : isBetweenMdxAndLg
            ? {xs: 12, mdx: showPreview ? 5 : 12}     // Desktop, > 991px && <= 1200px: showPreview == true -> 5:7 ratio, false -> 12:0 ratio
            : {xs: 12};                               // Mobile, <= 991px: renders whole width

    const rightSize = isLgUp
        ? {xs: 12, mdx: 7, lg: 7}                 // Desktop, > 1200px: render as usual, 5:7 ratio
        : isBetweenMdxAndLg && showPreview
            ? {xs: 12, mdx: 7}                        // Desktop, > 991px && <= 1200px: showPreview == true -> 5:7 ratio, false -> 12:0 ratio
            : {xs: 12};                               // Mobile, <= 991px: renders whole width

    const rightDisplay = isLgUp
        ? "flex"                                    // >= 1200px: always show
        : isBetweenMdxAndLg
            ? (showPreview ? "flex" : "none")           // > 991px && <= 1200px: toggle
            : (showPreview ? "block" : "none");         // <= 991px: toggle below the form

    const selectedTemplate =
        templateEntries.find((t) => t.key === selectedTemplateKey)?.tpl ?? "";

    // ---------- Helpers: experience ----------
    const addExperience = () =>
        setData((d) => ({
            ...d,
            experience: [
                ...d.experience,
                {
                    company: "",
                    role: "",
                    location: "",
                    start: "",
                    end: "",
                    summary: "",
                    bullets: [""],
                },
            ],
        }));
    const removeExperience = (idx: number) =>
        setData((d) => ({...d, experience: d.experience.filter((_, i) => i !== idx)}));
    const setExperienceField = (
        idx: number,
        key: keyof (typeof initial.experience)[number],
        v: any
    ) =>
        setData((d) => ({
            ...d,
            experience: d.experience.map((j, i) => (i === idx ? {...j, [key]: v} : j)),
        }));
    const addExperienceBullet = (idx: number) =>
        setData((d) => ({
            ...d,
            experience: d.experience.map((j, i) =>
                i === idx ? {...j, bullets: [...(j.bullets || []), ""]} : j
            ),
        }));
    const setExperienceBullet = (idx: number, bIdx: number, v: string) =>
        setData((d) => ({
            ...d,
            experience: d.experience.map((j, i) =>
                i === idx
                    ? {...j, bullets: j.bullets.map((b, bi) => (bi === bIdx ? v : b))}
                    : j
            ),
        }));
    const removeExperienceBullet = (idx: number, bIdx: number) =>
        setData((d) => ({
            ...d,
            experience: d.experience.map((j, i) =>
                i === idx ? {...j, bullets: j.bullets.filter((_, bi) => bi !== bIdx)} : j
            ),
        }));

    // ---------- Helpers: projects ----------
    const addProject = () =>
        setData((d) => ({
            ...d,
            projects: [...d.projects, {name: "", link: "", description: "", bullets: [""]}],
        }));
    const removeProject = (idx: number) =>
        setData((d) => ({...d, projects: d.projects.filter((_, i) => i !== idx)}));
    const setProjectField = (
        idx: number,
        key: keyof (typeof initial.projects)[number],
        v: any
    ) =>
        setData((d) => ({
            ...d,
            projects: d.projects.map((p, i) => (i === idx ? {...p, [key]: v} : p)),
        }));
    const addProjectBullet = (idx: number) =>
        setData((d) => ({
            ...d,
            projects: d.projects.map((p, i) =>
                i === idx ? {...p, bullets: [...(p.bullets || []), ""]} : p
            ),
        }));
    const setProjectBullet = (idx: number, bIdx: number, v: string) =>
        setData((d) => ({
            ...d,
            projects: d.projects.map((p, i) =>
                i === idx
                    ? {...p, bullets: p.bullets.map((b, bi) => (bi === bIdx ? v : b))}
                    : p
            ),
        }));
    const removeProjectBullet = (idx: number, bIdx: number) =>
        setData((d) => ({
            ...d,
            projects: d.projects.map((p, i) =>
                i === idx ? {...p, bullets: p.bullets.filter((_, bi) => bi !== bIdx)} : p
            ),
        }));

    // ---------- Helpers: education ----------
    const addEducation = () =>
        setData((d) => ({
            ...d,
            education: [
                ...d.education,
                {school: "", degree: "", field: "", start: "", end: "", notes: ""},
            ],
        }));
    const removeEducation = (idx: number) =>
        setData((d) => ({...d, education: d.education.filter((_, i) => i !== idx)}));
    const setEducationField = (
        idx: number,
        key: keyof (typeof initial.education)[number],
        v: any
    ) =>
        setData((d) => ({
            ...d,
            education: d.education.map((e, i) => (i === idx ? {...e, [key]: v} : e)),
        }));

    // ---------- Export ----------
    const handleExportPdf = async () => {
        try {
            setLoading(true);
            const response = await fetch("/api/cvs/builder", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    payload: data,
                    cvName: `${new Date().toISOString()}_${session?.user?.name}'s CV`,
                    templateKey: selectedTemplateKey
                }),
            });

            const result = await response.json();
            if (!response.ok || !result?.data?.url) {
                setDownloadUrl(null);
                setMessage(result?.error || "Conversion failed");
                setLoading(false);
                return;
            }
            setDownloadUrl(result.data.url);
            const fileSize = result.data.file_size as number < 1000000
                ? `${result.data.file_size as number / 1000} KB`
                : `${result.data.file_size as number / 1000000} MB`;
            setMessage(
                result?.data?.expires_after
                    ? `Ready • File name: ${result.data.filename} • File size: ${fileSize} • Expires ${new Date(result.data.expires_after).toLocaleString()}`
                    : "Ready"
            );
            setLoading(false);
        } catch (error: any) {
            setDownloadUrl(null);
            setMessage(error?.message || "Failed to export PDF");
        }
    };

    return (
        <Box sx={{width: "100%"}}>
            {/* Header */}
            <Box sx={{py: 4, textAlign: "center", color: "#217799"}}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        color="#101828"
                        sx={{
                            fontSize: {xs: "28px", mdx: "48px"},
                            lineHeight: {xs: "32px", mdx: "60px"},
                            mb: 2,
                        }}
                    >
                        CV Builder
                    </Typography>
                </Container>
            </Box>

            {/* Builder */}
            <Container maxWidth="xl" sx={{pb: 6}}>
                <Grid container spacing={4} alignItems="flex-start">
                    {/* LEFT: Form */}
                    <Grid size={leftSize}>
                        <Paper elevation={1} sx={{p: 2, mb: 2, borderRadius: 2, border: "1px solid #E5E7EB"}}>
                            <FormControl fullWidth>
                                <InputLabel id="template-select-label">Template</InputLabel>
                                <Select
                                    labelId="template-select-label"
                                    value={selectedTemplateKey}
                                    label="Template"
                                    onChange={(e) => setSelectedTemplateKey(e.target.value)}
                                >
                                    {templateEntries.map((t) => (
                                        <MenuItem key={t.key} value={t.key}>
                                            {t.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Paper>
                        <Box sx={{
                            maxHeight: {xs: "none", mdx: "calc(100vh - 160px)"},
                            overflowY: {xs: "visible", mdx: "auto"},
                            pr: {mdx: 1},
                            WebkitOverflowScrolling: "touch",
                        }}>
                            <Stack spacing={3}>
                                {/* Personal Info */}
                                <PersonalInfo
                                    value={data.profile}
                                    onChange={(k, v) => setData((d) => ({...d, profile: {...d.profile, [k]: v}}))}
                                />

                                {/* Experience */}
                                <Experience
                                    items={data.experience}
                                    onAdd={addExperience}
                                    onRemove={removeExperience}
                                    onChange={setExperienceField}
                                    onAddBullet={addExperienceBullet}
                                    onRemoveBullet={removeExperienceBullet}
                                    onBulletChange={setExperienceBullet}
                                />

                                {/* Projects */}
                                <Projects
                                    items={data.projects}
                                    onAdd={addProject}
                                    onRemove={removeProject}
                                    onChange={setProjectField}
                                    onAddBullet={addProjectBullet}
                                    onRemoveBullet={removeProjectBullet}
                                    onBulletChange={setProjectBullet}
                                />

                                {/* Education */}
                                <Education
                                    items={data.education}
                                    onAdd={addEducation}
                                    onRemove={removeEducation}
                                    onChange={setEducationField}
                                />

                                {/* Skills & Meta */}
                                <SkillsMeta
                                    skills={data.skills}
                                    meta={data.meta}
                                    onSkillsListChange={(s) =>
                                        setData((d) => ({
                                            ...d,
                                            skills: {
                                                ...d.skills,
                                                list: s.split(",").map((x) => x.trim()).filter(Boolean)
                                            },
                                        }))
                                    }
                                    onGroupChange={(key, s) =>
                                        setData((d) => ({
                                            ...d,
                                            skills: {
                                                ...d.skills,
                                                groups: {
                                                    ...d.skills.groups,
                                                    [key]: s.split(",").map((x) => x.trim()).filter(Boolean)
                                                },
                                            },
                                        }))
                                    }
                                    onMetaChange={(k, v) => setData((d) => ({...d, meta: {...d.meta, [k]: v}}))}
                                />
                            </Stack>
                        </Box>
                    </Grid>

                    {/* RIGHT: Template selector + Live Preview */}
                    <Grid
                        size={rightSize}
                        sx={{
                            display: rightDisplay,
                            justifyContent: (rightDisplay === 'flex' ? 'center' : undefined)
                        }}
                    >
                        <Box sx={{
                            position: {xs: "static", mdx: "sticky"},
                            top: 24,
                            alignSelf: "flex-start",
                            width: "100%",
                            display: {xs: "block", mdx: "flex"},
                            justifyContent: "center",
                            px: {mdx: 1}
                        }}>
                            <CvBuilderPreview template={selectedTemplate} data={deferredData}/>
                        </Box>
                    </Grid>
                </Grid>

                {/* Action bar */}
                <Box sx={{mt: 3}}>
                    <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        justifyContent="flex-start"
                    >
                        {/* Toggle preview if on insufficient screen space */}
                        <Button
                            variant="outlined"
                            sx={{display: {lg: "none"}}}
                            onClick={() => setShowPreview((v) => !v)}
                        >
                            Toggle Preview
                        </Button>
                        {/* Open PDF button */}
                        <Button
                            variant="outlined"
                            disabled={!downloadUrl}
                            onClick={() => downloadUrl && window.open(downloadUrl, "_blank")}
                        >
                            Open PDF
                        </Button>

                        {/* Export PDF */}
                        <Button
                            variant="contained"
                            onClick={handleExportPdf}
                            disabled={loading}
                            sx={{bgcolor: "#2494B6", "&:hover": {bgcolor: "#1e7a96"}}}
                        >
                            {loading ? "Exporting..." : "Export PDF"}
                        </Button>
                    </Stack>
                    {/* Message area */}
                    <Typography
                        variant="body2"
                        sx={{
                            ml: 2,
                            mt: 2,
                            color: !message
                                ? "text.secondary" : message.toLowerCase().includes("fail") || message.toLowerCase().includes("error")
                                    ? "error.main" : message.toLowerCase().includes("ready")
                                        ? "success.main" : "text.secondary",
                            whiteSpace: {mdx: "nowrap"},
                            maxWidth: {xs: "100%", mdx: 420},
                        }}
                    >
                        Status: {message || "None"}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}