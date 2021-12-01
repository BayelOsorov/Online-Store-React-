import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { clientContext } from '../../context/ClientContext';
const UserCards = ({ item }) => {
    const { addAndDeleteProductInCart, checkProductInCart, addAndDeleteProductInFavorites,
        checkFavoriteInFavorites } = React.useContext(clientContext)
    return (

        <Card className='grid-content-card bx-none' sx={{ maxWidth: 300 }}>
            <CardMedia
                style={{ objectFit: "contain" }}
                component="img"
                alt="green iguana"
                height="240"
                image={item.image}
            />
            <CardContent className='bx-none'>
                <p className='card-title' >
                    {item.name}
                </p>
                <Typography variant="body2" >
                    {item.description.slice(0, 100)}...
                </Typography>
            </CardContent>
            <CardActions className='my-cards detal-btn' >
                <Button
                    onClick={() => addAndDeleteProductInCart(item)}
                    className='shop-btn' color={checkProductInCart(item.id) ? 'error' : 'success'} variant='outlined' size="large">
                    <ShoppingCartIcon color={checkProductInCart(item.id) ? 'error' : ''} />
                </Button>
                <Button
                    onClick={() => addAndDeleteProductInFavorites(item)}
                    className='shop-btn' color={checkFavoriteInFavorites(item.id) ? 'error' : 'success'} variant='outlined' size="large">
                    <FavoriteIcon color={checkFavoriteInFavorites(item.id) ? 'error' : ''} />
                </Button>
                <Link to={`/product/${item.id}`} >
                    <Button variant="outlined" className='card-btn'>Подробнее</Button>
                </Link>
            </CardActions>
        </Card>

    );
};

export default UserCards;