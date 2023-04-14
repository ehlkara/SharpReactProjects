import React from 'react';
import { Link, Box } from '@mui/material';

export const LessonLink = () => {
    return (
        <Box>
            {/* <Link href='https://github.com/ehlkara'>Go My Github</Link>
            <Link href='https://github.com/ehlkara' color="error">Go My Github</Link>
            <Link href='https://github.com/ehlkara' color="error" variant='body2'>Go My Github</Link> */}
             <Link href='https://github.com/ehlkara' underline='none'>Go My Github</Link>
             <Link href='https://github.com/ehlkara' underline='hover'>Go My Github</Link>
             <Link href='https://github.com/ehlkara' underline='always'>Go My Github</Link>
             <Link href='https://github.com/ehlkara' component='button' onClick={() => {console.log('ehlkara')}}>Go My Github</Link>
        </Box>
    );
}
