import React, { useState } from 'react';
import { Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';

export const LessonLoadingButton = () => {

    const [value, setValue] = useState(false)

    return (
        <Stack direction='row'>
            <LoadingButton loading>Save</LoadingButton>
            <LoadingButton loading={value} onClick={() => setValue(true)} variant='outlined'>Save</LoadingButton>
        </Stack>
    )
}
