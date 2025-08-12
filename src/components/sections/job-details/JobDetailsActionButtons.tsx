// TODO: Implement these buttons
import React, {useEffect, useState} from "react";
import {Button, Dialog, Stack} from "@mui/material";
import {Share, Edit} from "@mui/icons-material";
import ApplyDialog from "./ApplyDialog";
import DeleteButton from "enigma/components/sections/admin/users/user-details/UserDetailsActionButtons";
import {Cv, Job} from "enigma/types/models";

// Define the props interface for ApplyDialog
interface ContentProps {
    handleClose: () => void;
    jobId?: string; // Optional props based on previous context
    title?: string;
    jobType?: "Permanent" | "Contract" | "Temporary"; // From your earlier Chip context
}

// Define props for ApplyNowDialog
interface ActionButtonsProps {
    // User ID of the person viewing the job
    userId: string | null | undefined;
    // Job object containing job details
    job: Job;
    // Exclude handleClose since it's passed separately
    contentProps?: Omit<ContentProps, "handleClose">;
    // Whether the page is open at public or admin
    isLocationAdmin: boolean;
    // Optional handler for Edit button (for admins)
    onEdit?: () => void;
    // Optional handler for Delete button (for admins)
    onDelete?: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({userId, job, contentProps, isLocationAdmin, onEdit}) => {
    const [open, setOpen] = useState(false);
    const [cvs, setCvs] = useState<Cv[]>([]);
    const [cvsFetched, setCvsFetched] = useState(false);

    useEffect(() => {
        if (!userId || cvsFetched) return;

        const fetchCvs = async () => {
            try {
                const response = await fetch(`/api/cvs?userid=${userId}`, {
                    method: "GET",
                    headers: {"Content-Type": "application/json"},
                });

                if (!response.ok) return;

                const data = await response.json();

                if (data.error) {
                    setCvs([]);
                    return;
                }
                setCvs(data.data || []);
                setCvsFetched(true);
            } catch (error) {
                console.error("Error fetching CVs:", error);
                setCvs([]);
            }
        }
        fetchCvs();
    }, [userId, cvsFetched]);

    const handleDelete = (itemId: string | number) => {
        // Add your delete logic here (e.g., API call)
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            {isLocationAdmin ? (
                <Stack direction="row" spacing={1}>
                    <Button
                        variant="contained"
                        startIcon={<Edit/>}
                        onClick={onEdit || (() => alert("Edit clicked"))} // Placeholder handler
                        sx={{
                            borderRadius: 2,
                            background: "linear-gradient(94.87deg, #81cce3, #0675a1 76.92%)",
                            textTransform: "none",
                        }}
                    >
                        Edit
                    </Button>
                    <DeleteButton
                        itemId={1}
                        onDelete={handleDelete}
                        buttonText="Delete"
                        dialogMessage="Do you want to delete this account permanently?"
                    />
                </Stack>
            ) : (
                <Button
                    variant="contained"
                    startIcon={<Share/>}
                    onClick={handleOpen}
                    sx={{
                        borderRadius: 2,
                        background: "linear-gradient(94.87deg, #81cce3, #0675a1 76.92%)",
                        textTransform: "none",
                    }}
                >
                    Apply Now
                </Button>
            )}

            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="md"
                fullWidth
                PaperProps={{
                    sx: {
                        borderRadius: "12px",
                    },
                }}
            >
                <ApplyDialog cvs={cvs} job={job} handleClose={handleClose} {...contentProps} />
            </Dialog>
        </>
    );
};

export default ActionButtons;
