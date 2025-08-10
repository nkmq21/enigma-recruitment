// TODO: Implement these buttons
import React, { useState } from "react";
import { Button, Dialog, Stack } from "@mui/material";
import { Share, Edit, Delete } from "@mui/icons-material";
import ApplyDialog from "./ApplyDialog";
import DeleteButton from "enigma/components/sections/admin/users/user-details/UserDetailsActionButtons";

// Define the props interface for ApplyDialog
interface ContentProps {
  handleClose: () => void;
  jobId?: string; // Optional props based on previous context
  title?: string;
  jobType?: "Permanent" | "Contract" | "Temporary"; // From your earlier Chip context
}

// Define props for ApplyNowDialog
interface ActionButtonsProps {
  contentProps?: Omit<ContentProps, "handleClose">; // Exclude handleClose since it's passed separately
  role: string; // Role prop to determine button rendering
  onEdit?: () => void; // Optional handler for Edit button (for admins)
  onDelete?: () => void; // Optional handler for Delete button (for admins)
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  contentProps,
  role,
  onEdit,
}) => {
  const [open, setOpen] = useState(false);

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
      {role === "admin" ? (
        <Stack direction="row" spacing={1}>
          <Button
            variant="contained"
            startIcon={<Edit />}
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
          startIcon={<Share />}
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
        <ApplyDialog handleClose={handleClose} {...contentProps} />
      </Dialog>
    </>
  );
};

export default ActionButtons;
