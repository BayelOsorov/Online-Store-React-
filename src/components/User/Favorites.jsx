import React, { useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { clientContext } from '../../context/ClientContext';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const Favorites = ({ open, handleClose }) => {
    const { addAndDeleteProductInCart, checkProductInCart, favorites, addAndDeleteProductInFavorites, getFavorite } = useContext(clientContext)
    useEffect(() => {
        getFavorite()
    }, [])// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='favorite-modal' sx={style}>
                    <Typography component={'span'} style={{ textAlign: 'center' }} id="modal-modal-title" variant="h6" > Избранное
                        {
                            favorites ? (
                                favorites.favorites.length > 0 ? (
                                    favorites.favorites.map((item) => (

                                        <div key={item.item.id} className="favorite" >
                                            <img alt='' width='100px' src={item.item.image} />
                                            <span style={{ marginRight: '50px', marginLeft: '30px' }} >{item.item.name}</span>

                                            <Button style={{ marginRight: '25px' }} variant='outlined' color='error' onClick={() => {
                                                addAndDeleteProductInFavorites
                                                    (item.item)
                                                getFavorite()
                                            }}
                                            >X</Button>
                                            <Button
                                                onClick={() => addAndDeleteProductInCart(item.item)}
                                                className='shop-btn' color={checkProductInCart(item.item.id) ? 'error' : 'success'} variant='outlined' size="large">
                                                <ShoppingCartIcon color={checkProductInCart(item.item.id) ? 'error' : ''} />
                                            </Button>

                                            <br />
                                        </div>

                                    ))
                                ) : (
                                    <h3>У вас нет избранных товаров</h3>
                                )
                            ) : (
                                <h3>Loading...</h3>
                            )
                        }
                    </Typography>

                </Box>
            </Modal>
        </div>
    );
};

export default Favorites;