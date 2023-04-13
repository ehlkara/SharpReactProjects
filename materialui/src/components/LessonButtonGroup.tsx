import React from 'react'
import { Button, Stack, ButtonGroup } from '@mui/material';

export const LessonButtonGroup = () => {
    return (
        <Stack direction='row'>
            <ButtonGroup variant='contained'>
                <Button>My Button</Button>
                <Button>My Button</Button>
                <Button>My Button</Button>
            </ButtonGroup>
            <ButtonGroup variant='outlined'>
                <Button>My Button</Button>
                <Button>My Button</Button>
                <Button>My Button</Button>
            </ButtonGroup>
            <ButtonGroup variant='text'>
                <Button>My Button</Button>
                <Button>My Button</Button>
                <Button>My Button</Button>
            </ButtonGroup>
            <ButtonGroup variant='text' orientation='vertical'>
                <Button>My Button</Button>
                <Button>My Button</Button>
                <Button>My Button</Button>
            </ButtonGroup>
            <ButtonGroup variant='text' orientation='vertical' size='small' color='error'>
                <Button>My Button</Button>
                <Button>My Button</Button>
                <Button>My Button</Button>
            </ButtonGroup>
        </Stack>
    )
}
