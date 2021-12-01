import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// grid
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';

export default function CaseCards() {

    return (
        <Container fixed className='card-container' >
            <Grid container className='card-flex' >
                <Link to='/product/423337' >
                    <Card className='grid-content-card bx-none' sx={{ maxWidth: 300 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="240"
                            image="https://static.tildacdn.com/tild3339-6239-4465-b736-613633343330/12.jpg"
                        />
                        <CardContent>
                            <p className='card-title'>
                                ЗАЩИТА КАМЕРЫ
                            </p>
                            <Typography variant="body2" >
                                Мы придумали как защитить камеру и подготовили коллекцию из титана, тимаскуса и карбона
                            </Typography>
                        </CardContent>
                    </Card >
                </Link>
                <Link to='/product/423338' >
                    <Card className='grid-content-card bx-none' sx={{ maxWidth: 300 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="240"
                            image="https://static.tildacdn.com/tild3863-6163-4364-b431-316632653538/_MG_6846.jpg"
                        />
                        <CardContent>
                            <p className='card-title' >
                                УГЛЕСТИКЕРЫ
                            </p>
                            <Typography variant="body2" >
                                Мы придумали клеящийся стикер для тех, кто выбирает компромис между габаритами и защитой
                            </Typography>
                        </CardContent>
                    </Card>
                </Link>
                <Link to='product/423339'>
                    <Card className='grid-content-card bx-none' sx={{ maxWidth: 300 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="240"
                            image="https://static.tildacdn.com/tild3230-3635-4664-a263-393265393666/_MG_7798.jpg"
                        />
                        <CardContent>
                            <p className='card-title' >
                                КАРБОН ПРОТЕКТ
                            </p>
                            <Typography variant="body2" >
                                Минималистичный 3D дизайн, разработанный нашим ателье для премиальной защиты смартфона
                            </Typography>
                        </CardContent>
                    </Card>
                </Link>
            </Grid>
        </Container >
    );
}
