import React, { useState } from 'react';
import { Dialog, DialogContent, DialogContentText, DialogActions, Button, DialogTitle } from '@mui/material';

export const LessonDialog = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    return (
        <>
            <Button onClick={() => setDialogOpen(true)}>Open Dialog</Button>
            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
                <DialogTitle>which one do you like?</DialogTitle>
                <DialogContent>
                    <DialogContentText>which frontend framework do you like?</DialogContentText>
                    <DialogActions>
                        <Button onClick={() => setDialogOpen(false)}>Angular</Button>
                        <Button onClick={() => setDialogOpen(false)}>React JS</Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </>
    )
}
