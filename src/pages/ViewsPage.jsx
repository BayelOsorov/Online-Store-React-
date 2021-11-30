import React, { useContext, useEffect } from 'react';
import { browsingContext } from '../context/BrowsingContext';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { clientContext } from "../context/ClientContext";

const ViewsPage = () => {
    const { getViews, views } = useContext(browsingContext)
    const { addAndDeleteProductInCart, checkProductInCart } =
        useContext(clientContext);
    let user = JSON.parse(localStorage.getItem('users'))
    useEffect(() => {
        getViews(user.username)
    }, [])

    return (
        <div style={{ marginTop: '70px' }}>
            История просмотров
            {
                views ? (
                    views.length > 0 ? (
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Название</TableCell>
                                        <TableCell align="right">Фото</TableCell>
                                        <TableCell align="right">Цена</TableCell>
                                        <TableCell align="right">#</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {views.map((item) => (
                                        <TableRow
                                            key={item.products.id}
                                            sx={{
                                                "&:last-child td, &:last-child th": { border: 0 },
                                            }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {item.products.name}
                                            </TableCell>
                                            <TableCell align="right">
                                                <img width="50px" src={item.products.image} alt="" />
                                            </TableCell>


                                            <TableCell align="right">
                                                {item.products.price} com{" "}
                                            </TableCell>
                                            <TableCell align="right">
                                                {
                                                    checkProductInCart(item.products.id) ? (
                                                        <Button
                                                            onClick={() => {
                                                                addAndDeleteProductInCart(item.products)

                                                            }}
                                                            className='shop-btn' color='error' variant='outlined' size="large">
                                                            Удалить из корзины
                                                        </Button>

                                                    ) : (
                                                        <Button
                                                            onClick={() => {
                                                                addAndDeleteProductInCart(item.products)
                                                            }}
                                                            className='shop-btn' color='success' variant='outlined' size="large">
                                                            Добавить в корзину
                                                        </Button>
                                                    )
                                                }
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    ) : (<h3>Вы ничего не посмотрели</h3>)
                ) : (<h4>Loading...</h4>)
            }
        </div>
    );
};

export default ViewsPage;