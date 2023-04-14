import { Box, TextField, MenuItem } from '@mui/material'
import React, { useState } from 'react'

export const LessonSelect = () => {

    const [country, setCountry] = useState('')

    console.log(country);

    // const handleChange = () => {

    // }

    return (
        <Box width='250px'>
            <TextField label="Select countries" select fullWidth value={country} onChange={(e) => setCountry(e.target.value)}>
                <MenuItem value="TR">Turkey</MenuItem>
                <MenuItem value="US">ABD</MenuItem>
                <MenuItem value="FR">FRANCE</MenuItem>
            </TextField>
        </Box>
    );
}
