import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// grid
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

export default function BagCards() {

    return (
        <Container fixed className='card-container' >
            <Grid container >
                <Card className='grid-content-card bx-none' sx={{ maxWidth: 300 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="240"
                        image="https://static.tildacdn.com/tild6133-6436-4466-b238-623066383961/_MG_9295.jpg"
                    />
                    <CardContent>
                        <p className='card-title' >
                            Рюкзаки
                        </p>
                        <Typography variant="body2" >
                            Рюкзаки Snowman Max из итальянской кожи и натурального карбона - образец элегантной классики в минимализме.
                        </Typography>
                    </CardContent>

                </Card>

                <Card className='grid-content-card bx-none' sx={{ maxWidth: 300 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="240"
                        image="https://static.tildacdn.com/tild3438-3434-4265-a338-646238386433/_MG_8666.jpg"
                    />
                    <CardContent>
                        <p className='card-title'>
                            Сумки
                        </p>
                        <Typography variant="body2" >
                            Наша коллекция стильных сумок является отличным функциональным решением в городской среде
                        </Typography>
                    </CardContent>

                </Card >

                <Card className='grid-content-card bx-none' sx={{ maxWidth: 300 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="240"
                        image="https://static.tildacdn.com/tild3062-3164-4634-a661-333166613865/_MG_6233.jpg"
                    />
                    <CardContent>
                        <p className='card-title' >
                            КОШЕЛЬКИ
                        </p>
                        <Typography variant="body2" >
                            Инновационные технологии JUMO в совмещении традиционных материалов и карбона
                        </Typography>
                    </CardContent>

                </Card>
            </Grid>
        </Container >
    );
}
