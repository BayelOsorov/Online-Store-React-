import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { clientContext } from '../context/ClientContext';

// snack
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Button, Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import Comments from '../components/User/Comments';
import MyRating from '../components/User/Rating';
import { ratingContext } from '../context/RatingContext';
import MyLikes from '../components/User/MyLikes';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const DetailPage = () => {
    const { getDetail, detailProduct, addAndDeleteProductInCart, checkProductInCart, addAndDeleteProductInFavorites, checkFavoriteInFavorites } = useContext(clientContext)
    const { getRates, ratings } = useContext(ratingContext)

    const params = useParams()
    useEffect(() => {
        getDetail(params.id)
        getRates(params.id)
    }, [])
    // snackbar
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    //  error snack
    const [open1, setOpen1] = React.useState(false);

    const handleClick1 = () => {
        setOpen1(true);
    };

    const handleClose1 = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen1(false);
    };
    const [open3, setOpen3] = React.useState(false);

    const handleClick3 = () => {
        setOpen3(true);
    };

    const handleClose3 = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen3(false);
    };
    const [open4, setOpen4] = React.useState(false);

    const handleClick4 = () => {
        setOpen4(true);
    };

    const handleClose4 = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen4(false);
    };
    // ?Rating
    let idRate
    let sum = 0
    if (ratings) {
        ratings.map((item) => {
            sum += +item.rate
            idRate = item.rate
        })
        sum = sum / ratings.length
    }
    return (
        <>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Added to cart
                    </Alert>
                </Snackbar>
            </Stack>

            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={open1} autoHideDuration={2000} onClose={handleClose1}>
                    <Alert severity="error">Deleted from cart</Alert>
                </Snackbar>
            </Stack>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={open3} autoHideDuration={2000} onClose={handleClose3}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Added to favorites
                    </Alert>
                </Snackbar>
            </Stack>

            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={open4} autoHideDuration={2000} onClose={handleClose4}>
                    <Alert severity="error">Deleted from favorites</Alert>
                </Snackbar>
            </Stack>
            <div className='detail-page'>
                {
                    detailProduct ? (

                        <div className="details" key={detailProduct.id}>
                            <div className="big-img">
                                <img src={detailProduct.image} alt="" />
                            </div>

                            <div className="box">
                                <div className="row">
                                    <h2>{detailProduct.name}</h2>
                                    <span>${detailProduct.price}</span>
                                </div>
                                <Rating
                                    precision={0.5} value={sum}
                                    name="simple-controlled"
                                    readOnly
                                />
                                <p>{detailProduct.description}</p>
                                <Link to='/products' >
                                    <Button style={{ display: 'block' }} >Back to products</Button>
                                </Link>
                                {
                                    checkProductInCart(detailProduct.id) ? (
                                        <Button
                                            onClick={() => {
                                                addAndDeleteProductInCart(detailProduct)
                                                handleClick1()
                                            }}
                                            className='shop-btn' color='error' variant='outlined' size="large">
                                            Delete from cart
                                        </Button>

                                    ) : (
                                        <Button
                                            onClick={() => {
                                                addAndDeleteProductInCart(detailProduct)
                                                handleClick()
                                            }}
                                            className='shop-btn' color='success' variant='outlined' size="large">
                                            Add to cart
                                        </Button>
                                    )
                                }
                                {
                                    checkFavoriteInFavorites(detailProduct.id) ? (
                                        <Button
                                            onClick={() => {
                                                addAndDeleteProductInFavorites(detailProduct)
                                                handleClick4()

                                            }}
                                            className='shop-btn' color='error' variant='outlined' size="large">
                                            Delete from favorites
                                        </Button>

                                    ) : (
                                        <Button
                                            onClick={() => {
                                                addAndDeleteProductInFavorites(detailProduct)
                                                handleClick3()

                                            }}
                                            className='shop-btn' color='success' variant='outlined' size="large">
                                            Add to favorites
                                        </Button>
                                    )
                                }
                                <div className='my-rate' >
                                    <MyRating idRate={idRate} />
                                    <MyLikes />

                                </div>
                            </div>
                        </div>
                    ) : (
                        <h2>Loading...</h2>
                    )
                }

            </div>
            <Comments />
        </>
    );
};

export default DetailPage;