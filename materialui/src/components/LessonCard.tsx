import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';

export const LessonCard = () => {
    return (
        <Card sx={{ width: 350 }}>
            <CardMedia height="150" component="img" image='https://source.unsplash.com/random' />
            <CardContent>
                <Typography variant='h5' component="div">
                    My title
                </Typography>
                <Typography variant='body2' component="p">
                    My title Nulla et quis quis cupidatat tempor est fugiat mollit commodo. Labore mollit adipisicing occaecat et voluptate aliqua veniam velit amet officia consequat do veniam et. Minim do elit aute est nulla voluptate nostrud velit laboris proident excepteur enim. Aliqua mollit ut do ex consequat nulla magna et labore minim in magna. Nostrud cupidatat elit adipisicing adipisicing nisi laborum reprehenderit officia cillum. Ex cillum tempor aute dolore esse exercitation aute consectetur tempor aute nostrud. Consequat dolore velit proident dolor.
                </Typography>
            </CardContent>
            <CardActions>
                <Button color='error'>Clear</Button>
                <Button>Save</Button>
            </CardActions>
        </Card>
    )
}
