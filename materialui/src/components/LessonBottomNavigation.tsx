import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationIcon from '@mui/icons-material/LocationOn';

export const LessonBottomNavigation = () => {

    const [value, setValue] = useState(0);

    console.log(value);

    return (
        <BottomNavigation showLabels value={value} sx={{ width: '100%', position: 'absolute', bottom: 0 }}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}>
            <BottomNavigationAction icon={<RestoreIcon />} label='Previous ones' />
            <BottomNavigationAction icon={<FavoriteIcon />} label='My loved ones' />
            <BottomNavigationAction icon={<LocationIcon />} label='My locations' />
        </BottomNavigation>
    )
}
