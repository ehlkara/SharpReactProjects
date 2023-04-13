import React, { useState } from 'react'
import { FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText } from '@mui/material'

export const LessonRadioGroup = () => {

    const [value, setValue] = useState('')

    console.log(value);

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setValue(event.target.value);
    // }

    return (
        <FormControl>
            <FormLabel>Your salary expectation</FormLabel>
            <RadioGroup row name='expected-salary' value={value} onChange={(e) => setValue(e.target.value)}>
                <FormControlLabel label="2000$" value="2000" color='secondary' control={<Radio />} />
                <FormControlLabel label="3000$" value="3000" color='secondary' control={<Radio />} />
                <FormControlLabel label="4000$" value="4000" color='secondary' control={<Radio />} />
            </RadioGroup>
            <FormHelperText>Wrong chose</FormHelperText>
        </FormControl>
    )
}
