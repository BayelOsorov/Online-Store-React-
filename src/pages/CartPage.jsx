import React, { useContext, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

import { Link } from "react-router-dom";
import { clientContext } from "../context/ClientContext";
const CartPage = () => {
    const { getCart, cart, changeCountProduct, addAndDeleteProductInCart } =
        useContext(clientContext);
    useEffect(() => {
        getCart();
    }, [])// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <>
            <div className="cart-page">
                <Link to='/products' >
                    <Button  >To products</Button>
                </Link>
                <h2>Cart</h2>
                {cart ? (
                    cart.products.length > 0 ? (
                        <div>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Name</TableCell>
                                            <TableCell align="right">Image</TableCell>
                                            <TableCell align="right">Count</TableCell>
                                            <TableCell align="right">Total Price</TableCell>
                                            <TableCell align="right">#</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {cart.products.map((item) => (
                                            <TableRow
                                                key={item.product1.id}
                                                sx={{
                                                    "&:last-child td, &:last-child th": { border: 0 },
                                                }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {item.product1.name}
                                                </TableCell>
                                                <TableCell align="right">
                                                    <img width="50px" src={item.product1.image} alt="" />
                                                </TableCell>

                                                <TableCell align="right">
                                                    <input
                                                        onChange={(e) =>
                                                            changeCountProduct(
                                                                e.target.value,
                                                                item.product1.id
                                                            )
                                                        }
                                                        type="number"
                                                        value={item.count}
                                                    />
                                                </TableCell>

                                                <TableCell align="right">
                                                    {item.subPrice} com{" "}
                                                </TableCell>
                                                <TableCell align="right">
                                                    <Button
                                                        variant='outlined'
                                                        color='error'
                                                        onClick={() => {
                                                            addAndDeleteProductInCart(item.product1);
                                                            getCart()
                                                        }}
                                                    >
                                                        Delete from cart
                                                    </Button>{" "}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                        <TableRow>
                                            <TableCell colSpan={3} align="right">
                                                Total price:
                                            </TableCell>
                                            <TableCell colSpan={1} align="right">
                                                {cart.totalPrice} com
                                            </TableCell>
                                            <TableCell colSpan={1} align="right">
                                                <Link to="/order">
                                                    <Button variant="contained" color='success' >Buy Now</Button>
                                                </Link>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    ) : (
                        <>
                            <h2>Your cart is empty</h2>
                            <Link to='/products' >
                                <Button variant='outlined' >To products</Button>
                            </Link>
                        </>
                    )
                ) : (
                    <h2>Loading...</h2>
                )}
            </div>
        </>
    );
};

export default CartPage;