import React from 'react';
import { Breadcrumbs, Link } from '@mui/material';

export const LessonBreadsCrump = () => {
    return (
        <Breadcrumbs separator="-" maxItems={2}>
            <Link href='/' underline='hover'>Home</Link>
            <Link href='/' underline='hover'>Blog</Link>
            <Link underline='none'>Ehlkara</Link>
            <Link underline='none'>Ehlkara</Link>
            <Link underline='none'>Ehlkara</Link>
            <Link underline='none'>Ehlkara</Link>
            <Link underline='none'>Ehlkara</Link>
            <Link underline='none'>Ehlkara</Link>
            <Link underline='none'>Ehlkara</Link>
            <Link underline='none'>Ehlkara</Link>
            <Link underline='none'>Ehlkara</Link>
        </Breadcrumbs>
    )
}
