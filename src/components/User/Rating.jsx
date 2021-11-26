import { Rating } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ratingContext } from '../../context/RatingContext';

const MyRating = ({ idRate }) => {
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
    const addRateToProduct = (e) => {
        let value = e.target.value
        setInpVal(value)
        if (ratings) {
            let tempId, tempObj = false
            ratings.forEach(item => {
                if (item.owner === user.username) {
                    tempObj = true
                    tempId = item.id
                    tl = item.rate
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
    idRate = +idRate
    return (
        <div>
            <Rating
                name="simple-controlled"
                value={idRate}
                onChange={addRateToProduct}
            />

        </div>
    );
};

export default MyRating;