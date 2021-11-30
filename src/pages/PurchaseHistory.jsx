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
import { purchaseContext } from "../context/PurchaseContext";
const PurchaseHistory = () => {
    const { getPurchase, purchases } = useContext(purchaseContext)
    const user = JSON.parse(localStorage.getItem('users'))
    let username = ''
    if (user) {
        username = user.username
    }
    useEffect(() => {
        getPurchase(username);
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <div className="cart-page">
                <Link to='/products' >
                    <Button  >To products</Button>
                </Link>
                <h2>Cart</h2>
                {purchases ? (
                    purchases.length > 0 ? (
                        <>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Название</TableCell>
                                            <TableCell align="right">Фото</TableCell>
                                            <TableCell align="right">Кол-во</TableCell>
                                            <TableCell align="right">Сумма</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {purchases.map((item) => (
                                            <>
                                                {
                                                    item.cart.products.map((elem) => (
                                                        <>
                                                            <TableRow
                                                                key={elem.product1.id}
                                                                sx={{
                                                                    "&:last-child td, &:last-child th": { border: 0 },
                                                                }}
                                                            >
                                                                <TableCell component="th" scope="row">
                                                                    {elem.product1.name}
                                                                </TableCell>
                                                                <TableCell align="right">
                                                                    <img width="50px" src={elem.product1.image} alt="" />
                                                                </TableCell>

                                                                <TableCell align="right">
                                                                    {elem.count}
                                                                </TableCell>

                                                                <TableCell align="right">
                                                                    {elem.subPrice} com{" "}
                                                                </TableCell>
                                                                <TableCell align="right">

                                                                </TableCell>
                                                            </TableRow>
                                                        </>
                                                    ))}

                                                <TableRow style={{ backgroundColor: 'lightblue' }} >
                                                    <TableCell colSpan={1} align="right">
                                                        Куплено в {item.createdAt}
                                                    </TableCell>
                                                    <TableCell colSpan={2} align="right">
                                                        Итого:
                                                    </TableCell>
                                                    <TableCell colSpan={2} align="right">
                                                        {item.cart.totalPrice} com
                                                    </TableCell>
                                                </TableRow>
                                            </>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </>
                    ) : (<h2>Вы еще не совершали покупок</h2>)

                ) : (
                    <h2>Loading...</h2>
                )}

            </div>
        </>
    );
};

export default PurchaseHistory;