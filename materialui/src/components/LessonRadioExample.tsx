import React, { useState } from 'react'
import { FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText, Button } from '@mui/material'

export const LessonRadioExample = () => {
    const [value, setValue] = useState('')
    const [helperText, setHelperText] = useState('')
    const [error, setError] = useState(false)

    const handleRadioChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(value === 'canboz'){
            setHelperText('Correct answer is ofcourse Can Boz!');
            setError(false)
        }
        else if (value === 'ofcoursecanboz'){
            setHelperText('Congrats on the correct answer.');
            setError(false)
        }
        else {
            setHelperText('Please select option!');
            setError(true);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormControl error={error}>
                <FormLabel>Who provides the most comprehensive Frontend training?</FormLabel>
                <RadioGroup onChange={handleRadioChange}>
                    <FormControlLabel value="canboz" label="Can Boz" control={<Radio />} />
                    <FormControlLabel value="ofcoursecanboz" label="Of course Can Boz" control={<Radio />} />
                </RadioGroup>
                <FormHelperText>{helperText}</FormHelperText>
                <Button type='submit' variant='outlined'>Send</Button>
            </FormControl>
        </form>
    )
}
