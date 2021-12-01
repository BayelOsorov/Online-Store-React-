import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { recomendContext } from '../../context/RecommendContext';
import Grid from '@mui/material/Grid';
import { clientContext } from '../../context/ClientContext';

const RecommendCards = () => {
    const { getDetail } = useContext(clientContext)
    const { getRecommend, recommends } = useContext(recomendContext)
    const params = useParams()
    useEffect(() => {
        getDetail(params.id)
    }, [])
    useEffect(() => {
        getRecommend(params.id)

    }, [])
    const navigate = useNavigate()
    const handleClick = (id) => {
        navigate(`/product/${id}`)
        getDetail(params.id)
        getRecommend(params.id)
        window.scrollTo(0, 0)
    }
    return (
        <>
            <Container fixed className='card-container' >
                <Grid container >
                    {
                        recommends ? (
                            recommends.length > 0 ? (
                                <>
                                    {
                                        recommends.slice(0, 3).map((item) => (
                                            <>
                                                <Card onClick={() => handleClick(item.id)} key={item.id} className='grid-content-card bx-none' sx={{ maxWidth: 300 }}>
                                                    <CardMedia
                                                        component="img"
                                                        alt="green iguana"
                                                        height="240"
                                                        image={item.image}
                                                        style={{ objectFit: 'contain' }}
                                                    />
                                                    <CardContent>
                                                        <p className='card-title' >
                                                            {item.name}
                                                        </p>
                                                        <Typography variant="body2" color="text.secondary">
                                                            {item.description.slice(0, 60)}...
                                                        </Typography>
                                                    </CardContent>

                                                </Card>
                                            </>
                                        ))
                                    }</>
                            ) : (
                                <h4 className='no-recomms' >Нет схожих товаров по бренду</h4>
                            )

                        ) : (
                            <h2>Loading...</h2>
                        )
                    }
                </Grid>
            </Container>
        </>
    );
};

export default RecommendCards;