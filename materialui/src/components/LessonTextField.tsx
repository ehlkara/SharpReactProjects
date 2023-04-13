import React from 'react'
import { Stack, TextField, InputAdornment } from '@mui/material';
import { useState } from 'react';

export const LessonTextField = () => {

    const [value, setValue] = useState('')

    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <TextField label="Name" />

                <TextField label="Name" variant='outlined' />

                <TextField label="Name" variant='filled' />

                <TextField label="Name" variant='standard' />

                <TextField label="Name" variant='outlined' size='small' color='error' />

                <TextField label="Name" variant='outlined' helperText="Please enter name" />

                <TextField type='password' label="Password" variant='outlined' helperText="Please enter password" />

                <TextField disabled type='password' label="Password" variant='outlined' helperText="Please enter password" />

                <TextField InputProps={{ readOnly: true }} type='password' label="Password" variant='outlined' helperText="Please enter password" />

                <TextField InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>TL</InputAdornment>
                    )
                }} type='total' label="Total" variant='outlined' />

                <TextField InputProps={{
                    endAdornment: (
                        <InputAdornment position='end'>TL</InputAdornment>
                    )
                }} type='total' label="Total" variant='outlined' />

            </Stack>
            <Stack direction='row'>
                <TextField 
                onChange={(e) => setValue(e.target.value)}
                value={value} 
                type='password' 
                label="Password" 
                variant='outlined' 
                helperText={!value ? 'Please enter password': 'Dont share your password'} />
            </Stack>
        </Stack>
    )
}
