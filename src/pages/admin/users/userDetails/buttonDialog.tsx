import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

interface DeleteButtonProps {
    onDelete: (itemId: string | number) => void; // Type for the delete callback, accepts string or number for itemId
    itemId: string | number; // Type for itemId, can be string or number
    buttonText?: string; // Optional, defaults to 'Delete'
    dialogTitle?: string; // Optional, defaults to 'Confirm Deletion'
    dialogMessage?: string; // Optional, defaults to 'Are you sure you want to delete this item?'
    buttonSx?: object; // Optional, for custom button styles
    submitButtonText?: string; // Optional, defaults to 'Submit'
    cancelButtonText?: string; // Optional, defaults to 'Cancel'
}

const DeleteButton: React.FC<DeleteButtonProps> = ({
    onDelete, // Callback function to handle the delete action
    itemId, // ID or data for the item to delete
    buttonText = 'Delete', // Default button text
    dialogTitle = 'Confirm Deletion', // Default dialog title
    dialogMessage = '', // Default dialog message
    buttonSx = {}, // Optional custom styles for the Delete button
    submitButtonText = 'Submit', // Default submit button text
    cancelButtonText = 'Cancel', // Default cancel button text
}) => {
    // State to control dialog visibility
    const [open, setOpen] = useState(false);

    // Handle opening the dialog
    const handleOpen = () => {
        setOpen(true);
    };

    // Handle closing the dialog
    const handleClose = () => {
        setOpen(false);
    };

    // Handle delete action
    const handleDelete = () => {
        onDelete(itemId); // Call the provided delete callback with the itemId
        setOpen(false); // Close dialog after confirming
    };

    return (
        <>
            {/* Delete Button */}
            <Button
                sx={{
                    boxShadow: '0px 0px 0px 1px rgba(16, 24, 40, 0.18) inset, 0px -2px 0px rgba(16, 24, 40, 0.05) inset, 0px 1px 2px rgba(16, 24, 40, 0.05)',
                    borderRadius: '8px',
                    backgroundColor: '#2494b6',
                    border: '2px solid rgba(255, 255, 255, 0.12)',
                    color: '#fff',
                    padding: '10px 14px',
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '14px',
                    '&:hover': {
                        backgroundColor: '#1e7a96', // Darker shade for hover
                    },
                    ...buttonSx, // Merge custom styles
                }}
                onClick={handleOpen}
            >
                {buttonText}
            </Button>

            {/* Confirmation Dialog */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{
                    '& .MuiDialog-paper': {
                        borderRadius: '8px', // Rounded corners
                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
                        backgroundColor: '#fff',
                    },
                }}
            >
                <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">{dialogMessage}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        sx={{
                            color: '#2494b6',
                            textTransform: 'none',
                            fontWeight: 600,
                        }}
                    >
                        {cancelButtonText}
                    </Button>
                    <Button
                        onClick={handleDelete}
                        sx={{
                            backgroundColor: '#2494b6',
                            color: '#fafafa',
                            textTransform: 'none',
                            fontWeight: 600,
                            '&:hover': {
                                backgroundColor: '#1e7a96',
                            },
                        }}
                        autoFocus
                    >
                        {submitButtonText}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default DeleteButton;