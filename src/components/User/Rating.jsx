import { Rating } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ratingContext } from '../../context/RatingContext';

const MyRating = () => {
    const { addRate,
        getRates,
        changeRate,
        getRateById,
        ratings,
        rate } = useContext(ratingContext)
    let params = useParams()
    useEffect(() => {
        getRates(params.id)
    }, [])
    const [inpVal, setInpVal] = useState()
    let user = JSON.parse(localStorage.getItem('users'))
    let tl
    if (ratings) {
        ratings.forEach(item => {
            if (item.owner === user.username) {
                tl = item.rate
            }
        })
    }
    const addRateToProduct = (e) => {
        let value = e.target.value
        setInpVal(value)
        if (ratings) {
            let tempId, tempObj = false
            ratings.forEach(item => {
                if (item.owner === user.username) {
                    tempObj = true
                    tempId = item.id
                }
            })
            if (!tempObj) {
                let newProd = {
                    owner: user.username,
                    rate: value,
                    productId: params.id
                }
                addRate(newProd)
            } else {
                changeRate(user.username, value, params.id, tempId)
            }
        }
    }
    // idRate = +idRate
    return (
        <div>
            {
                ratings ? (
                    <Rating
                        name="simple-controlled"
                        value={tl}
                        onChange={addRateToProduct}
                    />
                ) : (<h2>Load</h2>)
            }


        </div>
    );
};

export default MyRating;