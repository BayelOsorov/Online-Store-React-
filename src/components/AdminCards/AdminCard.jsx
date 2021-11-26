import React, { useContext, useEffect } from 'react';
import { adminContext } from '../../context/AdminContext';
// card
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Tooltip } from "@mui/material";

// grid
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';

const AdminCard = () => {
    const { getProducts, products, deleteProduct } = useContext(adminContext)
    useEffect(() => {
        getProducts()
    }, [])
    return (
        <div>
            {
                products ? (
                    <Container fixed className='card-container' >
                        <Grid container >
                            {
                                products.map((item) => (
                                    <Card key={item.id} className='grid-content-card' sx={{ maxWidth: 300 }}>
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            height="240"
                                            image={item.image}
                                        />
                                        <CardContent>
                                            <p className='card-title' >
                                                {item.name}
                                            </p>
                                            <Typography variant="body2" color="text.secondary">
                                                <strong>brand:</strong>  {item.brand}
                                            </Typography>
                                            <Tooltip title={item.description} >
                                                <p> {item.description.slice(0, 20)}...</p>
                                            </Tooltip>
                                            <Typography variant="body2" color="text.secondary">
                                                {item.price} com
                                            </Typography>
                                        </CardContent>
                                        <CardActions className='admin-cards' >
                                            <Button onClick={() => deleteProduct(item.id)} variant='outlined' color='error'>Delete</Button>
                                            <Link to={`/admin/edit/${item.id}`}>
                                                <Button variant='contained' >Edit</Button>
                                            </Link>
                                        </CardActions>
                                    </Card>
                                ))
                            }
                        </Grid>
                    </Container >
                ) : (
                    <h2>Loading...</h2>
                )
            }
        </div>
    );
};

export default AdminCard;