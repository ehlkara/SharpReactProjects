import React, { useState } from 'react'
import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup, FormHelperText } from '@mui/material'

export const LessonCheckbox = () => {

    const [isAccept, setIsAccept] = useState(false);
    const [knowledge, setKnowledge] = useState<string[]>([]);
    // console.log(isAccept);


    const handleKnowledge = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = knowledge.indexOf(event.target.value);
        if (index === -1) {
            setKnowledge([...knowledge, event.target.value])
        }
        else {
            setKnowledge(knowledge.filter((item) => item !== event.target.value));
        }
    }

    console.log(knowledge);

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
            <Box>
                <FormControl>
                    <FormLabel>What do you know in frontend?</FormLabel>
                    <FormGroup row>
                        <FormControlLabel value='react' control={<Checkbox checked={knowledge.includes('react')} onChange={handleKnowledge} />} label='React Js' />
                        <FormControlLabel value='angular' control={<Checkbox checked={knowledge.includes('angular')} onChange={handleKnowledge} />} label='Angular Js' />
                        <FormControlLabel value='vue' control={<Checkbox checked={knowledge.includes('vue')} onChange={handleKnowledge} />} label='Vue Js' />
                    </FormGroup>
                </FormControl>
            </Box>
        </Box>
    )
}
