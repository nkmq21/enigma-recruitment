import React, {useEffect, useState} from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableContainer,
    Paper,
    Chip,
    Box,
    Typography,
    Checkbox,
    IconButton,
    CircularProgress,
    Button,
    Stack,
} from "@mui/material";
import Image from "next/image";
import {Job} from "enigma/types/models";
import {PaginatedResponse} from "enigma/types/DTOs";
import {toDisplayValue} from "enigma/utils/dateFormat";

const JobsTable: React.FC = () => {
    const [loading, setLoading] = React.useState(true);
    const [jobData, setJobData] = React.useState<Job[]>([]);
    const [meta, setMeta] = React.useState<PaginatedResponse<Job>['meta'] | null>(null);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [selected, setSelected] = React.useState<readonly number[]>([]);

    // Fetch jobs function with page parameter
    const fetchJobs = React.useCallback(async (page: number) => {
        setLoading(true);
        try {
            const queryParams = new URLSearchParams();
            queryParams.set('status', 'active,prioritized,expired');
            queryParams.set('page', page.toString());
            queryParams.set('limit', '10');

            console.log('Admin jobs query params:', queryParams.toString());

            const response = await fetch(`/api/admin/jobs?${queryParams.toString()}`);
            if (!response.ok) {
                throw new Error('Failed to fetch jobs');
            }

            const data: PaginatedResponse<Job> = await response.json();
            if (data.items && Array.isArray(data.items)) {
                const transformedJobs = data.items.map((job: Job) => ({
                    ...job,
                    industry: job.industry || {industry_name: ""},
                    job_function: job.job_function || {job_function_name: ""},
                    subfunction: job.subfunction || {job_subfunction_name: ""},
                    close_date: job.close_date ? new Date(job.close_date) : new Date(),
                    created_date: job.created_date ? new Date(job.created_date) : new Date()
                }));
                setJobData(transformedJobs);
                setMeta(data.meta);
            } else {
                console.error('Unexpected response data:', data);
                setJobData([]);
                setMeta(null);
            }
        } catch (error) {
            console.error("Jobs fetch failed:", error);
            setJobData([]);
            setMeta(null);
        } finally {
            setLoading(false);
        }
    }, []);

    // Initial fetch and refetch when page changes
    React.useEffect(() => {
        fetchJobs(currentPage);
    }, [fetchJobs, currentPage]);

    // Pagination handlers
    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
        setSelected([]); // Clear selections when changing pages
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            handlePageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        const metaInfo = getMetaInfo();
        if (metaInfo && currentPage < metaInfo.totalPages) {
            handlePageChange(currentPage + 1);
        }
    };

    const getMetaInfo = () => {
        if (!meta) return null;
        return {
            page: meta.page ?? 1,
            limit: meta.limit ?? 10,
            total: meta.total ?? 0,
            totalPages: meta.totalPages ?? 1
        };
    };

    const metaInfo = getMetaInfo();

    // Selection handlers
    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = jobData.map((_, index) => index);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleCheckboxClick = (
        event: React.MouseEvent<unknown>,
        index: number
    ) => {
        event.stopPropagation();
        const selectedIndex = selected.indexOf(index);
        let newSelected: number[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, index);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }

        setSelected(newSelected);
    };

    const isSelected = (index: number) => selected.indexOf(index) !== -1;

    // Helper function to get job status for display
    const getJobStatus = (job: Job) => {
        const now = new Date();
        const closeDate = job.close_date ? new Date(job.close_date) : null;

        if (job.status === 'expired' || (closeDate && closeDate < now)) {
            return 'Expired';
        }
        if (job.status === 'active') {
            return 'Open';
        }
        if (job.status === 'prioritized') {
            return 'Priority';
        }
        return job.status;
    };

    // Generate page numbers for pagination
    const getPageNumbers = () => {
        if (!metaInfo) return [];

        const pages: (number | string)[] = [];
        const {page, totalPages} = metaInfo;

        if (totalPages <= 7) {
            // Show all pages if 7 or fewer
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Show first page
            pages.push(1);

            if (page > 3) {
                pages.push('...');
            }

            // Show current page and neighbors
            const start = Math.max(2, page - 1);
            const end = Math.min(totalPages - 1, page + 1);

            for (let i = start; i <= end; i++) {
                pages.push(i);
            }

            if (page < totalPages - 2) {
                pages.push('...');
            }

            // Show last page
            if (totalPages > 1) {
                pages.push(totalPages);
            }
        }

        return pages;
    };

    if (loading) {
        return (
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', py: 8}}>
                <CircularProgress sx={{mr: 2}}/>
                <Typography variant="body2" color="text.secondary">
                    Loading jobs...
                </Typography>
            </Box>
        );
    }

    return (
        <Box>
            <TableContainer
                component={Paper}
                sx={{width: "100%", overflowX: "auto", borderRadius: 2}}
            >
                <Table sx={{minWidth: 650}} aria-label="job table">
                    <TableHead>
                        <TableRow
                            sx={{
                                backgroundColor: "#F9FAFB",
                                "& th": {
                                    borderBottom: "1px solid #E4E7EC",
                                    padding: "12px 24px",
                                    color: "#475467",
                                    fontWeight: 500,
                                    fontSize: "12px",
                                    lineHeight: "18px",
                                },
                            }}
                        >
                            <TableCell padding="checkbox">
                                <Checkbox
                                    color="primary"
                                    indeterminate={
                                        selected.length > 0 && selected.length < jobData.length
                                    }
                                    checked={
                                        jobData.length > 0 && selected.length === jobData.length
                                    }
                                    onChange={handleSelectAllClick}
                                    inputProps={{
                                        "aria-label": "select all jobs",
                                    }}
                                />
                            </TableCell>
                            <TableCell>Job Title</TableCell>
                            <TableCell>Location</TableCell>
                            <TableCell>Post Date</TableCell>
                            <TableCell>Expiration</TableCell>
                            <TableCell>State</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {jobData.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={7} sx={{textAlign: 'center', py: 4}}>
                                    <Typography variant="body2" color="text.secondary">
                                        No jobs found
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ) : (
                            jobData.map((job, index) => {
                                const isItemSelected = isSelected(index);
                                const labelId = `enhanced-table-checkbox-${index}`;
                                const jobStatus = getJobStatus(job);

                                return (
                                    <TableRow
                                        key={job.job_id || index}
                                        hover
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        selected={isItemSelected}
                                        sx={{
                                            "&:last-child td, &:last-child th": {border: 0},
                                            "& td": {
                                                borderBottom: "1px solid #F2F4F7",
                                                padding: "16px 24px",
                                            },
                                        }}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                color="primary"
                                                checked={isItemSelected}
                                                onClick={(event) => handleCheckboxClick(event, index)}
                                                inputProps={{
                                                    "aria-labelledby": labelId,
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Typography
                                                variant="body2"
                                                sx={{fontWeight: 500}}
                                                color="#344054"
                                            >
                                                {job.job_title || 'Untitled Job'}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="body2" fontWeight={500} color="#344054">
                                                {job.location || 'No location'}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="body2" fontWeight={500} color="#344054">
                                                {toDisplayValue(job.created_date)}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="body2" fontWeight={500} color="#344054">
                                                {toDisplayValue(job.close_date)}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Chip
                                                label={jobStatus}
                                                size="small"
                                                sx={{
                                                    borderRadius: "9px",
                                                    backgroundColor:
                                                        jobStatus === "Open" ? "#ECFDF5" :
                                                            jobStatus === "Priority" ? "#FEF3C7" : "#F9FAFB",
                                                    border:
                                                        jobStatus === "Open" ? "1px solid #9DE9AB" :
                                                            jobStatus === "Priority" ? "1px solid #FCD34D" : "1px solid #D1D5DB",
                                                    fontSize: "12px",
                                                    color:
                                                        jobStatus === "Open" ? "#087443" :
                                                            jobStatus === "Priority" ? "#92400E" : "#363F72",
                                                    lineHeight: "18px",
                                                    fontWeight: "500",
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Box sx={{display: "flex"}}>
                                                <IconButton size="small">
                                                    <Image src="/rubbish.svg" alt="Delete" height={20} width={20}/>
                                                </IconButton>
                                                <IconButton size="small">
                                                    <Image src="/edit.svg" alt="Edit" height={20} width={20}/>
                                                </IconButton>
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                );
                            })
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Pagination Section */}
            {metaInfo && metaInfo.totalPages > 1 && (
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mt: 3,
                    px: 1
                }}>
                    {/* Results info */}
                    <Typography variant="body2" color="text.secondary">
                        Showing {((metaInfo.page - 1) * metaInfo.limit + 1)}-{Math.min(metaInfo.page * metaInfo.limit, metaInfo.total)} of {metaInfo.total} results
                    </Typography>

                    {/* Pagination controls */}
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Button
                            variant="outlined"
                            size="small"
                            onClick={handlePrevious}
                            disabled={currentPage === 1 || loading}
                            sx={{
                                minWidth: 'auto',
                                px: 2,
                                color: '#374151',
                                borderColor: '#D1D5DB'
                            }}
                        >
                            Previous
                        </Button>

                        {getPageNumbers().map((page, index) => (
                            page === '...' ? (
                                <Typography key={index} sx={{px: 1, color: '#6B7280'}}>
                                    ...
                                </Typography>
                            ) : (
                                <Button
                                    key={index}
                                    variant={page === currentPage ? "contained" : "outlined"}
                                    size="small"
                                    onClick={() => handlePageChange(page as number)}
                                    disabled={loading}
                                    sx={{
                                        minWidth: '40px',
                                        height: '32px',
                                        fontSize: '14px',
                                        ...(page === currentPage ? {
                                            backgroundColor: '#3B82F6',
                                            color: 'white',
                                            '&:hover': {
                                                backgroundColor: '#2563EB'
                                            }
                                        } : {
                                            color: '#374151',
                                            borderColor: '#D1D5DB',
                                            '&:hover': {
                                                backgroundColor: '#F9FAFB'
                                            }
                                        })
                                    }}
                                >
                                    {page}
                                </Button>
                            )
                        ))}

                        <Button
                            variant="outlined"
                            size="small"
                            onClick={handleNext}
                            disabled={currentPage === metaInfo.totalPages || loading}
                            sx={{
                                minWidth: 'auto',
                                px: 2,
                                color: '#374151',
                                borderColor: '#D1D5DB'
                            }}
                        >
                            Next
                        </Button>
                    </Stack>
                </Box>
            )}

            {/* Show total results info when there's only one page */}
            {metaInfo && metaInfo.totalPages <= 1 && jobData.length > 0 && (
                <Box sx={{mt: 2, textAlign: 'center'}}>
                    <Typography variant="body2" color="text.secondary">
                        Showing {jobData.length} of {metaInfo.total} results
                    </Typography>
                </Box>
            )}
        </Box>
    );
};

export default JobsTable;
