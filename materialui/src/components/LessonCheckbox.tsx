import React, { useState } from 'react'
import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup, FormHelperText } from '@mui/material'

export const LessonCheckbox = () => {

    const [isAccept, setIsAccept] = useState(false);
    console.log(isAccept);

    return (
        <Box>
            <Box>
                <FormControl>
                    <FormLabel>Education Status</FormLabel>
                    <FormGroup row>
                        <FormControlLabel disabled control={<Checkbox />} label='High School' />
                        <FormControlLabel control={<Checkbox defaultChecked />} label='University' />
                        <FormControlLabel control={<Checkbox />} label='Primary School' />
                    </FormGroup>
                </FormControl>
            </Box>
            <Box>
                <FormControl>
                    <FormLabel>Education Status</FormLabel>
                    <FormGroup row>
                        <FormControlLabel control={<Checkbox checked={isAccept} onChange={(e) => setIsAccept(e.target.checked)} />} label='I have read and accept the terms of use.' />
                    </FormGroup>
                </FormControl>
            </Box>
        </Box>
    )
}
