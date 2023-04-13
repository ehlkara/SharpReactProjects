import React from 'react'
import { Button, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export const LessonButton = () => {
    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <Button variant='text'>Text</Button>
                <Button variant='outlined'>Outlined</Button>
                <Button variant='contained'>Contained</Button>
            </Stack>
            <Stack direction='row' spacing={2}>
                <Button variant='text' color='primary'>Blue</Button>
                <Button variant='text' color='secondary'>Purple</Button>
                <Button variant='text' color='success'>Green</Button>
                <Button variant='text' color='error'>Red</Button>
                <Button variant='text' color='warning'>Yellow</Button>
                <Button variant='text' color='info'>Light Blue</Button>
            </Stack>
            <Stack direction='row' spacing={2}>
                <Button variant='outlined' color='primary'>Blue</Button>
                <Button variant='outlined' color='secondary'>Purple</Button>
                <Button variant='outlined' color='success'>Green</Button>
                <Button variant='outlined' color='error'>Red</Button>
                <Button variant='outlined' color='warning'>Yellow</Button>
                <Button variant='outlined' color='info'>Light Blue</Button>
            </Stack>
            <Stack direction='row' spacing={2}>
                <Button variant='contained' color='primary'>Blue</Button>
                <Button variant='contained' color='secondary'>Purple</Button>
                <Button variant='contained' color='success'>Green</Button>
                <Button variant='contained' color='error'>Red</Button>
                <Button variant='contained' color='warning'>Yellow</Button>
                <Button variant='contained' color='info'>Light Blue</Button>
            </Stack>
            <Stack direction='row' spacing={2} display="block">
                <Button variant='outlined' size='small'>My Button</Button>
                <Button variant='outlined' size='medium'>My Button</Button>
                <Button variant='outlined' size='large'>My Button</Button>
            </Stack>
            <Stack direction='row' spacing={2} display="block">
                <AddIcon color='error'/>
                <Button variant='contained' startIcon={<AddIcon/>}>Add</Button>
                <Button variant='contained' endIcon={<AddIcon/>} onClick={() => alert('Clicked')}>Add</Button>
            </Stack>
        </Stack>
    );
}
