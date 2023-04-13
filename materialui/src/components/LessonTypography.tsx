import React from 'react'
import { Typography } from '@mui/material'

export const LessonTypography = () => {
    return (
        <div>
            <Typography variant='body1'>Body1 Dolor fugiat nulla occaecat irure. Et consectetur commodo nulla ad fugiat consequat non aliqua incididunt fugiat commodo. Id in culpa ipsum ea amet reprehenderit velit pariatur deserunt amet non exercitation ut ea. Eiusmod ad fugiat est voluptate Lorem fugiat cupidatat consequat dolore qui non eu aute aliquip.</Typography>
            <Typography variant='body2'>Body2 Dolor fugiat nulla occaecat irure. Et consectetur commodo nulla ad fugiat consequat non aliqua incididunt fugiat commodo. Id in culpa ipsum ea amet reprehenderit velit pariatur deserunt amet non exercitation ut ea. Eiusmod ad fugiat est voluptate Lorem fugiat cupidatat consequat dolore qui non eu aute aliquip.</Typography>
            <Typography variant='h1'>H1 View</Typography>
            <Typography variant='h2'>H2 View</Typography>
            <Typography variant='h3'>H3 View</Typography>
            <Typography variant='h4'>H4 View</Typography>
            <Typography variant='h5'>H5 View</Typography>
            <Typography variant='h6'>H6 View</Typography>

            <Typography variant='h1' component='h4'>H1 View</Typography>

            <Typography variant='h1' component='h4' align='left'>H1 View</Typography>
            <Typography variant='h1' component='h4' align='right'>H1 View</Typography>

            <Typography variant='subtitle1'>Sub Title 1</Typography>
            <Typography variant='subtitle2'>Sub Title 2</Typography>
        </div>
    )
}
