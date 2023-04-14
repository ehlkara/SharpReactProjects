import React from 'react';
import { Alert, Stack, AlertTitle } from '@mui/material';

export const LessonAlert = () => {
    return (
        <Stack spacing={2}>
            <Alert severity='error'>
                <AlertTitle>Error</AlertTitle>
                LessonAlert</Alert>
            <Alert severity='warning'><AlertTitle>Warning</AlertTitle>LessonAlert</Alert>
            <Alert severity='info'> <AlertTitle>Info</AlertTitle>LessonAlert</Alert>
            <Alert severity='success'> <AlertTitle>Success</AlertTitle>LessonAlert</Alert>
        </Stack>
    )
}
