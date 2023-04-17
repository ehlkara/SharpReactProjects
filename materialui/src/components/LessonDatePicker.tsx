import React, { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { Stack, TextField } from '@mui/material';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export const LessonDatePicker = () => {

    const [value, setValue] = useState<Dayjs | null>(dayjs('2022-04-17T15:30'));

    console.log(value);
    return (
        <Stack>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                {/* <DatePicker value={value} onChange={(newValue) => setValue(newValue)} label="Date" /> */}
                <TimePicker
                    label="Controlled picker"
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                />
            </LocalizationProvider>
        </Stack>
    )
}
