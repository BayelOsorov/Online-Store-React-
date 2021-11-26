import React, { useContext, useEffect, useState } from 'react';
import { clientContext } from '../../context/ClientContext';
import UserCards from './UserCards';

import Grid from '@mui/material/Grid';
import { Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import MyPagination from './MyPagination';
import { useNavigate } from 'react-router';
const AllUserProducts = () => {
    const { getProducts, products, currentPosts } = useContext(clientContext)
    useEffect(() => {
        getProducts()
    }, [])
    let obj = new URLSearchParams(window.location.search);
    let navigate = useNavigate();
    const [typeValue, setTypeValue] = useState("")// eslint-disable-line
    const filterProducts = (key, value) => {
        obj.set(key, value);
        let newUrl = `${window.location.pathname}?${obj.toString()}`;
        navigate(newUrl);
        getProducts();
        setTypeValue(value);
    };
    useEffect(() => {
        setTypeValue(obj.get("brand"));
    }, [obj])
    return (
        <>
            <Container fixed className='card-container' >
                <div className='radio-content' >
                    <FormControl className="radio-btn" component="fieldset">
                        <FormLabel component="legend">Бренд товара</FormLabel>
                        <RadioGroup
                            onChange={(e) => filterProducts("brand", e.target.value)}
                            row
                            aria-label="brand"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel
                                value="armani"
                                control={<Radio />}
                                label="Armani"
                            />
                            <FormControlLabel
                                value="brioni"
                                control={<Radio />}
                                label="Brioni"
                            />
                            <FormControlLabel value="lacoste" control={<Radio />} label="Lacoste" />
                            <FormControlLabel
                                value="versace"
                                control={<Radio />}
                                label="Versace"
                            />
                            <FormControlLabel
                                value="prada"
                                control={<Radio />}
                                label="Prada"
                            />
                        </RadioGroup>
                    </FormControl>
                </div>
                <Grid container >
                    {
                        products ? (
                            currentPosts.map((item) => (
                                <UserCards key={item.id} item={item} />
                            ))
                        ) : (
                            <h2>Loading...</h2>
                        )
                    }
                </Grid>
                <MyPagination />
            </Container >
        </>
    );
};

export default AllUserProducts;